# AJAX and JSON
Your blog site has become more popular, with authors contributing articles regularly. Your blog app now needs to render over 200 posts whenever a user browses your site. It's time to store data as a JSON file and retrieve that file with AJAX when we need it.

## Pair Coding
Use one repo for this lab. Switch off driving/navigating every time you finish one or two `TODO` items in the starter code. Test as you develop! Do "git add" and "git commit" every time you get a feature working. **a-c-p** before switching.
- Repo owner: Create new branch in your local workspace. Copy starter code to your workspace. git a-c-p the new branch.
- Repo owner: Add your partner as a collaborator.
- Driver: Clone repo, including the new branch. Start typing.
- When it's time to switch: Driver: Push to GitHub.  Other person: git pull, then start driving. Repeat this step until you're done with all TODOs in the code.
- Make a final PR from the new branch to master.

## TODOs: MVP
1. Start by looking over what's new in the codebase. There is a /data folder! There are several `// DONE` comments! Practice your code-reading skills by figuring out what the existing starter code is doing.
1. In `index.html`, after we load all our script tags, we need to kick off the retrieval of data, and rendering of the page. What's the right method to call?
1. Fill in what's needed in article.js, so that all the articles are retrieved using AJAX or read from localStorage, then loaded into the right format and rendered in the DOM.
1. We only need to use AJAX to request the JSON file if we don't already have it in localStorage, so the conditional check should call AJAX only when localStorage doesn't already have rawData.

# TODOs: Stretch Goals
1. Coded as above, we won't request a new JSON file if we've already downloaded it once. This cacheing is problematic: if the **JSON file** is updated, say when an author uploads a new article, our cache becomes outdated ("invalid"), our app won't ask for that file unless localStorage is cleared. To overcome this, we can use a small, fast AJAX request with a method of `HEAD`, to request **just the headers**, and none of the file's main content. The HEAD response will contain a key called "eTag". The value of the eTag header is calculated based on the contents of the file. So if a new article is added (or an existing one is edited even slightly), the server will compute a new eTag value.
  - If we cache the eTag (i.e., store it in localStorage), then we can compare our eTag copy with the eTag sent by the server, to determine if we need to get the whole file or not.
  - This can introduce some synchronization issues, so we'll need to carefully code the logic, especially how callbacks are used.

## AJAX Debugging Tip
Hint: You'll be able to see everything the server returns if your AJAX **.success**'s callback function looks something like this:

`function(data, message, xhr) {
  console.log(xhr); // "xhr" is the server's response.
}`

## Submit
1. URL for your final PR
2. Answers to these questions:
   - How long did this lab take?
   - What was most challenging?
   - What did you learn that you think will be useful to you as a coder?
