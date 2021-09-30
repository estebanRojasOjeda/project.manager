const mongoose = require("mongoose");

const PmSchema = new mongoose.Schema({
    name: {
        required: [true, "El nombre de proyecto es requerido"],
        minlength: [3, "El nombre debe tener minimo tres caracteres"],
        type: String
    },
    state: Number,
    date: Date
});



const Pm = mongoose.model("Pm", PmSchema);
module.exports = Pm;