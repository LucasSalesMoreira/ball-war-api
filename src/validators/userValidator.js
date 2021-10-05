const yup = require('yup');

module.exports = {
    addValidator: {
        nick: yup
            .string('O nick precisa ser uma string')
            .required('O nick é obrigatório!'),
        password: yup
            .string('O password precisa ser uma string')
            .required('O password é obrigatório!'),
        icon_url: yup
            .string('O icon_url precisa ser uma string')
    },

    getValidator: {
        id: yup
            .number('O id precisa ser um número')
            .required('O id é obrigatório!')
    },

    loginValidator: {
        nick: yup
            .string('O nick precisa ser uma string')
            .required('O nick é obrigatório!'),
        password: yup
            .string('O password precisa ser uma string')
            .required('O password é obrigatório!')
    }
};