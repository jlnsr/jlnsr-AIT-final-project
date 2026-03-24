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
### 1. Customer Orders
```
POST /restaurant-orders HTTP/1.1
...
Body:
shopping-cart=
```
