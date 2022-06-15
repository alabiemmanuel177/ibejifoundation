const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    emailaddress: {
      type: String,
      required: true,
    },    
    phoneno: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
