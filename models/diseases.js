var mongoose = require("mongoose");

var diseaseSchema = mongoose.Schema({
    title: String,
    symptoms : String,
   	cure : String,
   	category : [String],
   	doctors : [String]
});

module.exports = mongoose.model("Disease",diseaseSchema);
