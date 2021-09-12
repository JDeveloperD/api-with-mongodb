// class UserController {
//     constructor() {
//         // console.log("Clase Usuario");
//     }

const EmployeeController = require("./EmployeeController");

//     signIn(email, password) {
//         this.role = "admin";

//         if (email == "admin@gmail.com" && password == "123456") {
//             if (this.role == "admin") {
//                 console.log("panel de administrador");
//             } else {
//                 console.log("panel de empleado");
//             }
//         } else {
//             console.log("usuario o contraseña incorrectos");
//         }
//     }

//     signOut() {
//         console.log("Cerró Sesión");
//     }

//     inheritedFunction() {
//         console.log("función heredada");
//     }
// }

// module.exports = UserController;

class AdminController extends EmployeeController {

    constructor (props) {
        super(props);
    }

    registerEmployee() {
        //
    }

    updateEmployee() {
        //
    }

    deleteEmployee() {
        //
    }
}

module.exports = AdminController;