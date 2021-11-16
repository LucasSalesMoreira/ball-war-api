const yup = require('yup');

module.exports = {
    addValidator: {
        name: yup
            .string('O name precisa ser uma string')
            .required('O name é obrigatório!'),
        background_url: yup
            .string('background_url precisa ser uma string')
            .required('background_url é obrigatório!'), 
        visible: yup
            .boolean('O visible precisa ser um valor lógico'), 
        code: yup
            .string('code precisa ser uma string')
    },

    getValidator: {
        id: yup
            .number('O id precisa ser um número')
            .required('O id é obrigatório!')
    }
};