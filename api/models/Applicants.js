const mongoose = require("mongoose");

const ApplicantSchema = new mongoose.Schema(
  {
      Name: {
          type: String,
          required: true,
      },
      Email_Address:{
          type:String,
          required:true,
      },
      Type:{
        type:String,
        required:true,
    },
      Phone_No:{
        type:String,
        required:true,
      },
      Address:{
          type:String,
      }},
  { timestamps: true }
);

module.exports = mongoose.model("Applicant", ApplicantSchema)
