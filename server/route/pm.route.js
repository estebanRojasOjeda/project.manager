const PmController = require("../controller/pm.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.post("/api/pirate/new", authenticate, PmController.createPm);
    app.get("/api/pirate/all", authenticate, PmController.findProjects);
    app.get("/api/pirate/:id", authenticate, PmController.findProjectById);
    app.put("/api/pirate/:id", authenticate, PmController.updateProject);
    app.delete("/api/pirate/:id", authenticate, PmController.deleteProject);
}