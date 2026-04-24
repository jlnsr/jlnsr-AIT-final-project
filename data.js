import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

mongoose.connect(process.env.DSN).
  then(() => console.log('connected to database')).
  catch(err => console.log('database connection error: ' + err));

// 3 x SCHEMAS
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
//export default Order

const MenuItemSchema = new mongoose.Schema({
  name: {type:String},
  image: {type: String},
  description: {type: String},
  price: {type: Number},
  discount: {type: Number}
})
const MenuItem = mongoose.model('MenuItem', OrderSchema)
//export default MenuItem

const EmployeeSchema = new mongoose.Schema({
  firstName: {type:String},
  lastName: {type:String},
  employeeId: {type:String},
  password: {type:String},
  salt: {type:String}
})
const Employee = mongoose.model('Employee', EmployeeSchema)
//export default MenuItem

/* DUMMY EMPLOYEE FOR TESTING PURPOSES
firstName: "foo",
lastName: "bar",
employeeId: "abc123",
//hash: "abc123",
//salt: 
password: hash
*/

export {
  Order,MenuItem,Employee
}
