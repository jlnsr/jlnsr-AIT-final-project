import mongoose from 'mongoose';
mongoose.connect(process.env.DSN).
  then(() => console.log('connected to database')).
  catch(err => console.log('database connection error: ' + err));

// 2 x SCHEMAS
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

const MenuItemSchema = new mongoose.Schema({
  name: {type:String},
  image: {type: String},
  description: {type: String},
  price: {type: Number},
  discount: {type: Number}
})
const MenuItem = mongoose.model('MenuItem', OrderSchema)

/*
class MenuItemElement {
  constructor(parent, details){
    this.container = document.createElement('div');
    container.classList.add(`menu-item ${details.name}`)

    this.name = document.createElement('h2')
    name.textContent = details.name
    
    this.img = document.createElement('img')
    img.src = details.image
    
    this.descr = document.createElement('p')
    parent.textContent = details.description

    this.price = document.createElement('span')
    price.textContent = `$${details.price}`

    [name, img, descr, price].forEach(e => container.appendChild(e))
    parent.appendChild(container)
  }
  remove(){
    // remove
    this.container.remove()
  }
}*/
