const { Contract } = require('../models/Contract');
const { Employee } = require('../models/Employee');
const { Afp } = require('../models/Afp');
const contractService = require('../services/ContractService');

module.exports = {
    getAll: async (req, res) => {
        try {
            const contracts = await Contract.find();
        
            res.status(200)
                .json({
                    message: 'Lista de contratos',
                    data: contracts
                });
        } catch (e) {
            res.status(400)
                .json({
                    message: 'Internal error',
                    data: e.message
                });
        }
    },

    lastContractByEmployeeId: async (req, res) => {
        try {
            const employeeId = req.params.id;
            const lastContract = await Contract.find({_employeeId : employeeId});
            
            res.status(200)
                .json({
                    info: {},
                    result: lastContract[lastContract.length - 1]
                })
        } catch (e) {
            res.status(500)
                .json({
                    message: e.message,
                })
        }
    },

    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const contract = await Contract.findById(id);

            res.status(200)
                .json({
                    info: {},
                    result: contract
                })

        } catch (e) {
            res.status(500)
                .json({
                    message: e.message,
                })
        }
    },

    create: async (req, res) => {

        const data = req.body;
        let employeeN = await Employee.findById(data._employeeId);
        let lastContract = await Contract.find({_employeeId: data._employeeId});

        try {
            //validar que el empleado y el afp existan en la bd      
            const existAfp = await Afp.exists({_id: data._afpId});
            const existEmployee = await Employee.exists({_id: data._employeeId});

            if (!existAfp || !existEmployee) {
                throw Error("Compruebe que los id's del empleado y afp sean correctos");
            }

            // datos del empleado al que se le crea el contrato
            let employee = await Employee.findById(data._employeeId);
            let academicDegree = employee.academicDegree;

            // buscar si hay un contrato con el id del empleado
            let lastContract = await Contract.find({_employeeId: data._employeeId})

            // datos enviados del nuevo contrato
            let startDate = new Date(data.startDate);
            let endDate = new Date(data.endDate);
            let weeklyHours = data.weeklyHours;
            let hourlyValue = data.hourlyValue;
            
            // validaciones del contrato
            if (lastContract.length > 0) {
                let dateEndLastContract = new Date(lastContract[lastContract.length - 1].endDate);
                let statusLastContract = lastContract[lastContract.length - 1].status;

                // Regla 1
                if (contractService.checkIfThereIsAValidContract(dateEndLastContract, statusLastContract)) {
                    throw Error("El empleado tiene un contrato vigente");
                }

                // Regla 2
                if (!contractService.isRenewable(startDate,dateEndLastContract)) {
                    throw Error("La fecha de inicio debe ser superior a la fecha fin de su anterior contrato");
                }
            }
            
            // Regla 3
            if (!contractService.theyAreValidDates(startDate, endDate)) {
                throw Error("La fecha fin debe ser superior a la fecha de inicio con un periodo de 3 meses como m??nimo y 12 meses como m??ximo."); 
            }

            // Regla 4
            if (!contractService.validWeeklyHours(weeklyHours)) {
                throw Error("El total de horas contratadas por semana puede ser de 8 a 40 horas.");
            }

            // Regla 5
            if (!contractService.validateHourValueByAcademicGrade(academicDegree,hourlyValue)) {
                throw Error("Verifique el valor por hora ingresado corresponde al grado acad??mico del empleado.");
            }

            let contract = new Contract(data);
    
            // Guardando los datos en la bd
            await contract.save();
    
            res.status(201)
                .json({
                    message: "Se cre?? correctamente el contrato",
                    data: data
                });

        } catch (e) {
            res.status(400)
                .json({
                    status: "Error del cliente",
                    message: e.message
                })
        }
    }
}