Milestone 04 - Final Project Documentation
===

NetID
---
jls9980

Name
---
Julien Soto-Raspa

Repository Link
---
(https://github.com/jlnsr/jlnsr-AIT-final-project)

URL for deployed site 
---
(https://ait-final-project-3spz.onrender.com/menu)

URL for form 1 (from previous milestone) 
---
(https://ait-final-project-3spz.onrender.com/menu)

Special Instructions for Form 1
---
1. Select items from the menu
2. Click the "Go to cart" button (top-left)
3. Fill out the form with all necessary information.
4. Click "Submit". This will save your order to the database and load a new page that displays your order's status.
5. To see your order in the actual database, please proceed to the next step below. 

URL for form 2 (for current milestone)
---
(https://ait-final-project-3spz.onrender.com/staffAuth)

Special Instructions for Form 2
---
In order to view data about orders and analytics, you must be a credentialed business staff.
At this URL, you will be presented with a form, enter the following credentials:  
firstName: foo  
lastName: bar   
Employee Id: abc123  
Password: abc123

URL for form 3 (from previous milestone) 
---
(https://ait-final-project-3spz.onrender.com/ordersLog)

Special Instructions for Form 3
---
Press the "Go to analytics" button. A hidden form collects all the data in that table and uses it to drive the chart engine rendered in the next page.

First link to github line number(s) for constructor, HOF, etc.
---
(https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/public/scripts/helpers.js#L1-L29)

Second link to github line number(s) for constructor, HOF, etc.
---
(https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/public/scripts/helpers.js#L30-L52)

Third link to github line number(s) for constructor, HOF, etc.
---
(https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/public/scripts/formDom.js#L8)

Fourth link to github line number(s) for constructor, HOF, etc.
---
(https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/public/scripts/ordersLog.js#L9)

Short description for links above
---
1. This function acts as a wrapper to document.createElement, presenting a general-purpose interface for creating different elements. The function takes an options object as an argument, that configures the DOM element with all the user's attribute specifications. Lastly, it optionally takes an event handler that is assigned to that element. This saves the programmer from repetitive calls to 'document.createElement()' and other cumbersome attribute-setting processes.
2. A general purpose function for pulling elements from the DOM tree and optionally adding event listeners. Optionally takes an event handler and assigns it to the DOM element found with the provided query arguments.

Link to github line number(s) for schemas (db.js or models folder)
---
(https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/data.js#L8-L41) 

Link to Unit Test Results
---
(https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/documentation/unit_tests.png)

Description of research topics above with points
---
|Topic|Points|Link|
|-|-|-|
|better-sqlite3|1 points|https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/app.js#L32-L58|
|better-sqlite3-session-store|3 points|https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/app.js#L32-L58|
|Chart.js|1 points|https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/views/analytics.hbs|
|Jasmine (unit tests)|3 points|(https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/spec/support/tests.mjs)|
|React|2 points|(https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/views/menu.hbs#L16-L61)|
|window object|1 points|(https://github.com/jlnsr/jlnsr-AIT-final-project/blob/main/public/scripts/menuDom.js#L67-L80)|

Links to github line number(s) for research topics described above (one link per line)
---
See the table above.

Optional project notes 
--- 
I had originally planned to use React for most of the front-end; however, I chose to begin prototyping with vanilla Javascript to quickly develop a MVP for Milestone(s) 1 and 2. To meet the deadline for Milestone 3, I continued development with vanilla Javascript. By Milestone 4, it was virtually infeasible to overhaul the entire UI with React components. However, the research is still useful for future plans with this project, that will help simplify the code and reduce architectural complexity. 

Attributions
---
[better sqlite3](https://dev.to/lovestaco/understanding-better-sqlite3-the-fastest-sqlite-library-for-nodejs-4n8) - An introduction to interfacing with sqlite databases with JavaScript.  
[express-session-better-sqlite3](https://github.com/theogravity/express-session-sqlite/blob/master/README.md) - Using sqlite as a session store, rather than express-session's default in-memory store.  
[Chart.js](https://www.chartjs.org/docs/latest/getting-started/usage.html) - A guide on the different types of charts available with this library.  
[Jasmine](https://jasmine.github.io/tutorials/custom_matchers) - Documentation for Jasmine.  
[React](https://knowledge.kitchen/content/courses/agile-development-and-devops/notes/react-intro/) - Professor Amos Bloomberg's lesson on React (from his Agile Software Development & DevOps course I took last semester).  
[Document window object](https://www.sitepoint.com/javascript-window-object/) - Everything to know about interactivity achieved through manipulating the window object.