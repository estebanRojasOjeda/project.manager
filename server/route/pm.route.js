const PmController = require("../controller/pm.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.post("/api/pm/new", authenticate, PmController.createPm);
    app.get("/api/pm/all", authenticate, PmController.findProjects);
    app.get("/api/pm/:id", authenticate, PmController.findProjectById);
    app.put("/api/pm/:id", authenticate, PmController.updateProject);
    app.delete("/api/pm/:id", authenticate, PmController.deleteProject);
}