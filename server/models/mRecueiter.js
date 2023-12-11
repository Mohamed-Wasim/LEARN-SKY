const mongoose = require("mongoose");

const RecuieterSchema = new mongoose.Schema({
    Name:{type:String}, //Organitation name
    Email:{type:String}, //Organitation email
    ContNum:{type:String}, //organitation name
    website:{type:String}, //organitation website
    password:{type:String}, //password
    Type: { type: String},  //recuiter type
    Desc: { type: String }, //description
    catgry:{type:String}, //ctagory
    CrAt: { type: Date, default:Date.now },                                                           // Created At
    MoAt: { type: Date, default:Date.now },                                                           // Modified At
    CrBy: { type: String },                                                          // Created By
    MdBy: { type: String },                                                          // Modified By
    StFl: { type: String} ,   
    address: [{
        AdTy: { type: String },                                                         // Address Type                   
        AdL1: { type: String },                                                         // Address Line 1
        AdL2: { type: String },                                                         // Address Line 2
        AdL3: { type: String },                                                         // Address Line 3
        CyTn: { type: String },                                                         // City or Town
        Stat: { type: String },                                                         // State
        Cnty: { type: String },                                                         // Address Line 1
        EmAd: { type: String },                                                         // Email Address
        PhNo: { type: String },                                                         // Phone Number
        FaxN: { type: String },                                                         // Fax Number
        postcode: { type: String}
    }],
    logo:{type:String},
    


});

module.exports = mongoose.model("recuieter", RecuieterSchema);
