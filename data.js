import mongoose from 'mongoose';
mongoose.connect(process.env.DSN).
  then(() => console.log('connected to database')).
  catch(err => console.log('database connection error: ' + err));

// save all orders as...
const OrderSchema = new mongoose.Schema({
  name: {type: String},
  contact: {type: String},
  // array of all items in order (by name)  
  items: {type: [String]},
  itemCount: {type: Number},
  // personalized specifications for customer order
  notes: {type: String},
  totalPrice: {type: Number},
  //customer: {mongoose.Schema.Types.ObjectId, ref:'Customer'}
}, { timestamps: true });
// implicitly adds 'createdAt', 'updatedAt' fields
const Order = mongoose.model('Order', OrderSchema)
export default Order

// DB details
// Schema for restaurant items??
// customers = ANYONE who orders from this restaurant
const CustomerSchema = mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  // no password needed
  address: {type: String},
});

// ADDITIONAL
// schema for members
// members derive from customers??
// members = loyal customers who sign
// up for a special membership with a restaurant
const MemberSchema = mongoose.Schema({
  // derive data from 'Customer' document
  customer: {type: mongoose.Schema.Types.ObjectId, ref:'Customer'},
  // APPEND NEW fields (specific to Member)
  password: {type: String},
  //favorites: {type: [String]}
  // etc.
});
const Member = mongoose.model('Member', MemberSchema);