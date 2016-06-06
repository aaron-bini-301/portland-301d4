# Class 01 (Week 1, Mon): RWD, Mobile 1st, SMACSS
Let's develop some coding skills for mobile/responsive design!

---
## Key Objectives

### RWD/Mobile
Answer these questions:
- What is the difference between responsive, adaptive, and mobile design?
- What is responsive web design (RWD)?
- Name three main features of responsive design and their uses/benefits.
- What is mobile first design? What are its benefits?
- How is RWD used for mobile development?
- What are some of the challenges of incorporating embedded media in RWD?
- What is the formula (equation) at the heart of flexible layout systems?

Mob Coding:
- Understand <meta> viewport settings
  - *Visual* vs. *layout* viewports, units for width, height
- Media queries
  - Conditionally modify layout based on app's needs, i.e., correctly use media queries to reflow the DOM on mobile and desktop displays
  - Logical operators to facilitate @media queries
  - --> Add a background image and a nav bar that show up only for "desktop" widths.
- Build from mobile first to control scaling

### SMACSS
- Understand how SMACSS breaks down a site’s CSS into categories.
- Understand benefits of using SMACSS in project development.
- Become familiar with using resets as base stylesheets.
- Understand foundational CSS display types and positioning properties.

Mob Coding:
- Create modular CSS components by styling the wrapper(s) for blog articles

---
## Notes

### SMACSS
**SMACSS**: "Scalable &amp; Modular Architecture for CSS"
A way to organize your CSS files into meaningful categories.
- *Base*: Type of &quot;reset&quot;. single elements, general setup
- *Module*: Interior components (ex: navgation bars).
- *Layout*: Groups of modules; structural components (e.g.: header, positional styles)
- *State*: Which page is a module on? In/visible? In/active?
- *Theme*: Color/font &quot;skins&quot;

---
## Today's Labs

### Pair Lab: Blog Web App
Take the starter code for a web application that renders blog articles in a browser, an work with a partner to improve the blog app by making it responsive, so that it hides the main navigation menu under a "hamburger" link in small (narrow) browser viewports, and shows a row of tab-like links in wider viewports.

### Solo Lab: Portfolio App
Take what you leared during your pair lab and apply the same concepts to your "portfolio" web application.

### Resources
- Example extra-fancy responsive hamburger: http://www.sitepoint.com/pure-css-off-screen-navigation-menu/
- [IcoMoon: Free Icon Fonts](https://icomoon.io/app/#/select)

From the reading, repeated here for convenience:
- Shay Howe's Intro: http://learn.shayhowe.com/advanced-html-css/responsive-web-design/
- Dale Sande's RWD: http://www.anotheruiguy.com/ux-design-dev/_book/rwd/README.html
