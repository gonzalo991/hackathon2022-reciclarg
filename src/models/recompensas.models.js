const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecompensasSchema = new Schema({
    _id: {type: String},
    nombreEmpresa: { type: String, require: true },
    oferta: { type: String, require: true },
    descripcion: { type: String, require: true },
    logo: { type: String, require: true }
});

module.exports = mongoose.model('recompensas', RecompensasSchema);