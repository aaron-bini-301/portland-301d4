# SQL and Resource CRUD

Let's put your articles in an SQLite database inside your (Chrome) browser, where the database is actually stored on your laptop's local drive.

See [production deployment](https://cf-mvc-blog--class08.aerobatic.io/) of a mostly-working version; the list of blog authors purposely doesn't get "unique-ified" as your app should do, to not give away too much code to students who looked ahead this README a few days ago, and play around in Chrome's Inspector/dev tools. Experiment using the console, and look at the Resources tab -> WebSQL icon -> Blog DB (the database) -> articles (the table) to see blog articles stored there.

Spend 30 minutes sandboxing SQL commands using webdb.js, using demo code shown during lecture. Submit PRs for at least four sandboxed features, with two features per person's repo.

## User Stories: MVP
- As a developer, I want article data to persist with SQL, so I can store more, do fast queries, and have more query flexibility.

This means you'll want to be able to do full CRUD on articles in the database. Use SQL to make a table for articles (be sure to delete the table during troubleshooting if you need to, much like clearing localStorage helped you verify AJAX code execution). To create the table, use a class-level method attached to the constructor function (not the prototype, because table creation does not apply to any single instance). Then give each article instance a few "new powers": add methods that write/update the article in the table and delete the article from the table.

It is important that you analyze the starter code's logic, and trace through all the callback functions to determine WHEN it's the right time to load data, and when you should load JSON data instead of reading from a database. SQL processing is **asynchronous**. Make sure you properly "protect" any code you write that depends on data retrieved from a database. That code should be protected inside a callback passed to webDB.execute().

Look through the TODOs in the starter code, and focus initially on writing correct SQL.

There is no portfolio assignment.

## User Stories: Stretch Goals
 - As an author, I want to load an existing article in the editor with a special URL (editor/articles.html?id=42), so that I can see each component in a form.
 - As an author, I want to save and export my edits to existing articles, so that my changes persist.
 - As an author, I want an admin mode with an edit link on each article (index.html?admin=password).
 - As an author, I want to have draft posts, so that I can save my writing without publishing.

## Technical Requirements and Grading Rubric
 - Keep your code linted, as you work. Clean up all concerns before submitting.
 - Continue to make good use of SMACSS principles.
 - Utilize webSQL (the via provided `webDB` wrapper) to load and store articles information.
 - Import the data into WebSQL from your JSON source.

## GitHub/git Workflow for Pair Coding
The workflow for this lab is the same as for Day 7 (functional programming).

## Submit

- Submit the URL for the sandbox app(s) in your repo.
- Submit the URL of the PR. Both coders to submit the same URL.
- Please answer these questions:
  - How long did this lab take?
  - What was most challenging?
  - What did you learn that you think will be useful to you as a coder?
