const { add } = require("lodash");

let c = 0;
module.exports = {
    async test(req, res) {
        c++;
        console.log(c);
        return res.status(200).json({ ok: true });
    },

    async add(req, res) {
        
    }
};