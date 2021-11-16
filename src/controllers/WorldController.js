const World = require('../models/World');
const WorldConfig = require('../models/WorldConfig');
const validators = require('../validators/worldValidator');
const yup = require('yup');

module.exports = {
    async getAll(req, res) {
        try {
            const worlds = await World.findAll({
                include: [{ model: WorldConfig, as: 'config' }]
            });
            return res.status(200).json({ ok: true, worlds }); 
        } catch (error) {
            return res.status(400).json({ ok: false, error });
        }
    },

    async get(req, res) {
        try {
            const schema = yup.object().shape(validators.getValidator);
            const { id } = await schema.validate(req.params); 
            const world = await World.findByPk(id);
            return res.status(200).json({ ok: true, world });
        } catch (e) {
            return res.status(400).json({ ok: false, error: e.message });
        }
    },

    async add(req, res) {
        try {
            const schema = yup.object().shape(validators.addValidator);
            const { 
                name, 
                background_url, 
                visible, 
                code
            } = await schema.validate(req.body);
            const world = await World.create({ name });
            const worldConfig = await WorldConfig.create({
                background_url,
                visible,
                code,
                world_id: world.id
            });
            return res.status(200).json({ ok: true, world, worldConfig });
        } catch (e) {
            return res.status(400).json({ 
                ok: false, 
                error: e.message 
            });
        }
    }
}