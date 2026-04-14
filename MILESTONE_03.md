Milestone 03
===

Repository Link
---
[Julien's AIT Final Project](https://github.com/jlnsr/jlnsr-AIT-final-project)

URL for form 1 (from previous milestone) 
---
[Form 1, Submitting an Order](https://jlnsr-ait-final-project.onrender.com/menu)

Special Instructions for Form 1
---
1. Select items from the menu
2. Click the "Go to cart" button (top-left)
3. Fill out the form with all necessary information.
4. Click "Submit". This will save your order to the database and load a new page the displays your order's status.

URL for form 2 (for current milestone)
---
[Transition from /menu to /cart](https://jlnsr-ait-final-project.onrender.com/menu)

Special Instructions/Explaination for Form 2
---
The purpose of the /menu page is to present the user with all the options they can choose from, a static collection of content. The selected items will be saved and used to dynamically populate the /cart page, from which the user can preview and edit their order.
### Applying AJAX using Fetch API.  
 
#### Behind The Scenes:  
<b>GOAL</b>: Collect the items selected in the /menu page and use them to
dynamically populate the /cart page. The selected items are saved to an array, and the objective is to send this array as payload to the cart url.  

<b>PROBLEM</b>: How to send data as paylod with a request that is not made through a form.

<b>RESEARCH FINDING(S)</b>:  
|Candidate|Purpose|Check|
|-|-|-|
|Anchor Tags|Only for navigation; enforces GET request. This request cannot be configured.|No|
|Forms|Collect user data directly and send it elsewhere. Not suitable for sending data aggregated from user interactions and stored anywhere other than a form.|No|
|Fetch api|Can configure a request to send specific data, via POST method. The server saves this data (on a per-session basis), and, when recieving a subsequent GET method to the same endpoint, sends the saved data to the template. In order to force the browser to navigate to a new page, we use window.location.href = ' new-endpoint'. <--|Yes|

URL(s) to github repository with commits that show progress on research
--- 
(TODO: add link to github url that shows line or lines of code that demonstrate continued progress on research topics)

References 
---
(TODO: if applicable, links to annotated lines of code in github repository that were based off of tutorials / articles / sample projects)