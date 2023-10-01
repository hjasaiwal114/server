const mongoose =  require("mongoose");

const noteSchema =  new mongoose.Schema({
    title: String,
    body: String,
});

const Notes = mongoose.model("Note", noteSchema);

module.exports = Notes;