const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const listingSchema = new Schema({
     title: {
       type: String,
       required: true,
     },
     description: String,
     image: {
      type:String,
      set: (v) => v === "" ? "https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
     },
     price: Number,
     location: String,
     country: String,
     reviews: [
       {
        type: Schema.Types.ObjectId,
        ref: "Review",
       },
     ],
});

 listingSchema.post("findOneAndDelete", async(listing) => {
   if(listing) {
   await Review.deleteMany({_id : { $in: listing.reviews } });
   }
 });

const Listing = mongoose.model("Listing", listingSchema);  
module.exports = Listing;
