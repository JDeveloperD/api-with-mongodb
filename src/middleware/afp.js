function validationAfp(data) {
    const { name, discountRate } = data;
    
    if (name == "" || typeof name != "string" ) {
        throw new Error("El nombre es inválido");
    }

    if (discountRate == "") {
        throw new Error("El descuento no puede estar vacío");
    }
}

module.exports = validationAfp;