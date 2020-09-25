
const Madlib = require("../controllers/madlib.controller")

module.exports = app => {
    app.get("/api/madlib", Madlib.getAll);
    // app.post("/api/pet", Pet.create);
    // app.get("/api/pet/:_id", Pet.getOne);
    // app.put("/api/pet/:_id", Pet.update);
    // app.delete("/api/pet/:_id", Pet.remove);
}