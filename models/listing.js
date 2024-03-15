const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
     title: {
       type: String,
       required: true,
     },
     description: String,
     image: {
      type:String,
      default: "https://unsplash.com/photos/a-glass-walled-patio-with-a-table-and-chairs-Ye_5G755Ls0",
      set: (v) => v === "" ? "https://unsplash.com/photos/a-glass-walled-patio-with-a-table-and-chairs-Ye_5G755Ls0" : v,
     },
     price: Number,
     location: String,
     country: String,
});

const Listing = mongoose.model("Listing", listingSchema);  
module.exports = Listing;
