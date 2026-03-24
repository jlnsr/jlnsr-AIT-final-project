# Online Order Portal
For my final project, I will build a functional web application that acts as an interface between a fictional food establishment and its customers, handling orders, offering exclusive deals, and reporting analytics.
I endeavor to deliver an application that presents an elegant and optimal UI that allows both customers to place orders online with ease, and business owners to understand what their customers enjoy the most about their business!

# Features (by component) 
### 1. Online Order Portal
A full, comprehensive, and interactive overview of the restaurant's menu, as well as forms to collect data about the customer's order.
### 2. Order Ledger
Recieves form data, parses it into a human-readable string of text, relaying the specifics of the requested order to the culinary staff. Another UI designed to streamline operations in the kitchen, such as optimizing the order in which orders are handled.
### 3. Analytics
For the business; keeps track of all orders and classifies them by popularity, informing the business about how to optimize the inventory based on customer trends.
### 4. Membership
A feature intended for loyal customers who regularly order from the restaurant. The business offers exclusive deals to members, such as coupons, happy hours, free complementary meals/add-ons, birthday specials, etc. It is even personalized so that it can offer deals specific to the member's order history. This feature will improve customer outreach by incentivizing members to spread awarness of the restaurant's excellent offerings.

# Data Model
- ### Customer Orders
When a customer places an order, they fill out forms on the front-end, and the following snippet of a POST request is an example of what gets sent to the backend.
```
POST /order-portal HTTP/1.1
Content-Type: JSON
...
Body:
shopping-cart={
    "jerk-chicken": {
        "spicy": "very",
        "charred": False,
        "toppings": ["peppers", "onions"]
    },
    "chicken-shawarma": {
        "spicy": "medium",
        "charred": True,
        "toppings": ["green sauce", "hot sauce"]
    },
    "pomegranite-juice": {
        "sugar": 40,
        "size": small
    },
}
```
- ### Membership
Customers desiring membership fill out a simple form that gets sent to the back-end and added to a database. Members can then log-in to their accounts and access exclusive deals. An example member schema:
```
{
    firstName: "Mandela",
    lastName: "Elmazi",
    email: mandi_nishtulla@muzik.world
    password: 123abc,
    top3Picks: [
        "Kanji", "Xiaolongbao", 
        "Plješkavica with Rakija"
    ]
}
```
The schema contains basic authentication data, as well as more personal data to offer personalized deals to the customer. For instance, on the UI, the app would greet the customer by the name of 'Mandela Elmazi' and offer a Kanji, since that's one of his most ordered dishes.

# Site Map
![site map](public/images/sitemap.png)
# Wire Frame
![wire frame](public/images/wireframe.png)

# User Stories
1. As a user, I would like to be able to select items from the menu.
2. As a user, I would like to be able to modify the items I select to my liking.
3. As a user, I would like a a preview of my order before submitting.
4. As a user, I would like to see several images and a description of each item on the menu.
5. As a user, I would like to see reviews from other customers about each item on the menu.
6. As a user, I would like to keep track of the most popular dishes ordered.
7. As a user, I would like to see how my dishes change in popularity over time, so I know when to introduce new dishes. 
8. As a user, I would like to see a queue of all the current orders.
9. As a user, I would like to dequeue an order that is finished and ready to be served.
10. As a user, I would like to create a membership account so I can be offered exclusive deals.

# Research Topics 
- (3 points) Interface Design and Front-end functionality. 
    - [An Example: Oh My Gyro online order portal](https://omgyrohalal.square.site/#AKZAN5IFVRTATHK77V7IISV5) 
- (4 points) React.js
    - use React.js as the frontend framework; I have some experience with react so the overall interface shouldn't be that difficult to implement.
