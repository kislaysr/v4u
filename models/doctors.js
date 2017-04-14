var mongoose = require("mongoose");

var doctorSchema = mongoose.Schema({
    doctorid: String,
    aadharid : {
        type: String
    },
    name:String,    
    pincode : String,
    city  : String,
    state : String,
    country : String,
    category : [String] 
});

module.exports = mongoose.model("User",userSchema);
