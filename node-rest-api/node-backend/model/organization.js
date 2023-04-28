const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let organizations = new Schema(
  {
    org_name: {
      type: String,
    },
  },
  {
    collection: "organizations",
  }
);

module.exports = mongoose.model("organizations", organizations);
