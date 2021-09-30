const Pm = require("../model/pm.model");
const jwtConfig = require('../config/jwt.config');
const jwt = require('jsonwebtoken');

module.exports.createPm = (req, res) => {
    jwt.verify(req.cookies.usertoken, jwtConfig.secret, (error) => {
        if (!error) {
            Pm.create(req.body)
                .then(newProject => res.json({ newProject: newProject }))
                .catch(err => res.json({ message: "Error al crear proyecto", error: err }));
        } else {
            res.status(500).json(error);
        }
    });
}

module.exports.findProjects = (req, res) => {
    Pm.find({}).sort({date:1})
        .then(Projects => res.json({ Projects: Projects }))
        .catch(err => res.json({ message: "Error al listar", error: err }));
}

module.exports.findProjectById = (req, res) => {
    Pm.findById(req.params.id)
        .then(Project => res.json({ Project: Project }))
        .catch(err => res.json({ message: "Error al buscar por id", error: err }))
}

module.exports.updateProject = (req, res) => {
    Pm.findByIdAndUpdate(req.params.id, req.body)
        .then(ProjectUpdate => res.json({ ProjectUpdate: ProjectUpdate }))
        .catch(err => res.json({ message: "Error al actualizar", error: err }))
}

module.exports.deleteProject = (req, res) => {
    Pm.findOneAndRemove({ _id: req.params.id })
        .then(resDelete => res.json({ resDelete: resDelete }))
        .catch(err => res.status(500).json(err))
}