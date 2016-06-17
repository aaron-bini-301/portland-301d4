# Class 10 (Week 2, Fri): Review/Catchup Buffer&amp; Look Ahead

## Discussion

### Class Pulse
- How was lab yesterday? Today?
- Catch-up progress/status?

### Announcements

#### Quizzes
- Canvas quiz due tonite
- Previous in-class Quiz to be graded by early next week
- Next in-class Quiz will be next week.

#### Week 3 Preview
- Theme: Controllers (in MV**C**) to route. Client-side routes, proxies, external servers. REST APIs and FSM.
  - Mon: URLs, Routing, Page.js
  - Tue: REST APIs
  - Wed: Using Heroku, add DOM-manipulating HOFs to port app
  - Thr: Middleware &amp; States
  - Fri: Lecture kick-off
- Heads up: The week is front-loaded. Prepwork may be time-consuming, today's prep should help

## Mini-lecture 3 - 4 pm
Class 11 prep: Routing and Single Page Apps

A central concept in web development is the Web Request-Response Cycle (WRRC). Pay close attention to how your app creates and responds to requests. With client-side routing and JavaScript's "History" API, we can add a layer of abstraction on top of traditional routing. Think, "Full control of &lt;a href&gt;s".

### Slides
Client side routing

### Preview Assignments
- Class 11 prepwork
- Lab 11 blog &amp; portfolio

### Mob Code
- Create a web app using your current knowledge
  - Two tabs (text boxes or &lt;li&gt;s)
  - Two &lt;section&gt; elements (say, "A" and "B") w/ content
  - CSS to hide B
  - *Named* click handler for each tab; each handler shows/hides a section
  - HTML file w/ B's content
- Convert part of the app to be like a "Year 2000"-style static web site:
  - Wrap each tab w/ &lt;a hrefli&gt;s w/ links to self (A) and new HTML page (B)
- Back to 2016: "Trap" URLs to create a single-page app (SPA) with client-side routint:
  - Insert page.js
  - Map routes to click handlers

## Helpful Resources
- What is a Single-Page Application (SPA)? Live demo at http://www.johnpapa.net/pageinspa/
- Gallery of example SPAs: https://onepagelove.com/gallery/application
- **Implementation Details** --> Page.js docs: https://visionmedia.github.io/page.js
