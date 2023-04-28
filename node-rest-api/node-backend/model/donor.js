const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let DonationInformation = new Schema(
  {
    user_name: {
      type: String,
    },
    user_email: {
      type: String,
    },
    donation_amount: {
      type: Number,
    },
    org_name: {
      type: String,
    },
    owner_name: {
      type: String,
    },
    date_created: {
      type: String,
    },
  },
  {
    collection: "user_donations",
  }
);

module.exports = mongoose.model("user_donations", DonationInformation);
