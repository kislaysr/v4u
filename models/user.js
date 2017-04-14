var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    userid: String,
    aadharid : {
        type: String
    },
    name:String,    
    pincode : String,
    city  : String,
    state : String,
    country : String
});

module.exports = mongoose.model("User",userSchema);
