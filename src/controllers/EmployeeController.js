class EmployeeController {
    constructor({
        names,
        address = undefined,
        email,
        phone = undefined,
        dateBirth,
        maritalStatus = "soltero",
        academicDegree,
        role = "empleado"
    }) {
        this.names = names;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.dateBirth = dateBirth;
        this.maritalStatus = maritalStatus;
        this.academicDegree = academicDegree;
        this.role = role;
    }

    signIn(email, password) {
        this.role = "admin";

        if (email == "admin@gmail.com" && password == "123456") {
            if (this.role == "admin") {
                console.log("panel de administrador");
            } else {
                console.log("panel de empleado");
            }
        } else {
            console.log("usuario o contraseña incorrectos");
        }
    }

    signOut() {
        console.log("Cerró Sesión");
    }

    inheritedFunction() {
        console.log("función heredada");
    }
}

module.exports = EmployeeController;