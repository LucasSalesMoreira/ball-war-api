const yup = require('yup');

module.exports = {
    addValidator: {
        name: yup
            .string('O name precisa ser uma string')
            .required('O name é obrigatório!')
    },

    getValidator: {
        id: yup
            .number('O id precisa ser um número')
            .required('O id é obrigatório!')
    }
};