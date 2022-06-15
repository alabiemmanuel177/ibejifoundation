const mongoose = require("mongoose");

const ApplicantSchema = new mongoose.Schema(
  {
      name: {
          type: String,
          required: true,
      },
      emailaddress:{
          type:String,
          required:true,
      },
      type:{
        type:String,
        required:true,
    },
      phoneno:{
        type:String,
        required:true,
      },
      address:{
          type:String,
      }},
  { timestamps: true }
);

module.exports = mongoose.model("Applicant", ApplicantSchema)
