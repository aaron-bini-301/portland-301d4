### A. Setup
Visit [http://visionmedia.github.io/page.js](http://visionmedia.github.io/page.js) and follow instructions under "Running examples". Run the web app in your browser, per instructions on that site. In the browser, click "basic" to run the "basic" example app. Study the example source code for "basic" (study the JS code inside index.html) and experiment by changing the code and observing the effects of your changes in the browser.

 Note there's documentation on the page.js API just below the "Running examples" section, which you can refer to as you browse the "basic" example's code.

### B. Sandbox
Use the "basic" app's code as starter code: copy "basic/" to your own git workspace, git a-c-p, then modify the relative paths to work with the new folder set as "web root". Alternatively, make a copy of
[https://github.com/codefellows/portland-301d4/tree/master/demoCode/class11_routes](https://github.com/codefellows/portland-301d4/tree/master/demoCode/class11_routes) to your own git workspace, git a-c-p.

Verify that your copy works: In bash, from inside your copy of the app, run

    $ pushstate-server .

Note the period (.) that is part of that command.

Browse to localhost:9000 in your browser.

Aside: If you don't already have pushstate-server installed on your laptop, run

    $ sudo npm install -g pushstate-server

**IMPORTANT NOTES**

These notes are to help you avoid the most common issues that students have experienced in the past when working with pushstate-server.

1. Don't forget the **period (".")** after "pushstate-server" in your command. This is a common mistake for beginners.

2. pushstate-server is not the same as live-server. After running "pushstate-server .", **you** need to open a new browser tab and actually type in the URL "localhost:9000", then hit [Return] to get the app to run. If you don't manually browse to the URL, you'll just **stare at your screen** forever... You need to open only one new tab that browses to that URL. As you develop your app's code, just refresh that same tab (see note #4 below).

3. **live-server doesn't work** with web apps that rely on page.js. Pushstate-server acts more like a real server that allows URL "trapping"; live-server does not know how to support that type of behavior.

4. With pushstate-server, when you change code, you need to **manually refresh** your webpage. This is where you want to make sure "The **toaster** is plugged in" by remembering to refresh each time you change your app's code. Use [Command]-R (OSX) or ctrl-R (some Linux distros) to reload the page.

In Canvas, **submit** these reminders (don't just cut-and-paste these items):
- "Dot dot dot. Type the period when running pushstate-server."
- "New tabs are shiney! Manually browse to port 9000 to view the app."
- "Bad dog. Don't run live-server. Live-server is a bad, bad puppy today."
- "[Refesh]ments for everyone. Manually refresh my browser after I edit the app's code."

### C. Refactor and Extend
- If you're starting with the "basic" app, move the JS code inside index.html into its own JS file.
- Add the jQuery library and change any DOM element selectors in JS to use jQuery instead. Test again, then a-c-p.
- Add more DOM elements that have classes and/or IDs, then change the routing callbacks (index(), about(), ...) to manipulate the elements you added. Be sure to use jQuery selectors. Test/debug, then a-c-p.
- Turn the clickable links into a nav bar. Make sure they stay as links (with &lt;href&gt; attributes); don't add any event handlers. Test/debug again, then a-c-p.
-  Add an article "page" inside index.html. This is more advanced, but will position you well for Day 11 labs. Test/debug and a-c-p after each step:
  - Create a JSON file that contains two articles whose bodies are in markdown format. Add Javascript code to one of the bodies (use a markdown previewer, such as the one in Atom, to verify your article body strings).
  - Add a handlebars template to index.html
  - Write JS that reads the objects from the JSON file. Use proper async coding.
  - Add handlebars, marked, and highlight libraries, and use them to convert the markdown body to HTML.
  - Add a link to the nav bar for the article page. This will make it clickable. Remember to use **href**, not a click handler.
  - Write a route callback function that causes the articles to be rendered (show the articles and hide the other DOM elements).
- Create a "404 not found" page (not as a separate HTML file, but rather as a set of DOM elements that are normally hidden).
- Add a route that uses "*" to show that page when the URL doesn't match known (mapped) routes.

**Submit** the URL for your final PR for this section.

### D. Analyze
Study your code in detail, and again, refer to the API documentation mentioned above, and learn as much as you can about each of these methods/functions:

1. page() and page.start()
2. page.base(path)
3. page(path) and page.show(path)
4. page(path, callback)
5. page(path, callback) where the path contains ":"
6. page(path, callback) where the path contains "*"

You are encouraged to sandbox to learn how each of these features works.

In Canvas, **submit** answers to the following questions:
- What is the purpose of each of the functions/methods in #1 thru #6 above?
- If you have multiple route mappings, which mapping gets priority when more than one path matches?
- In your app at the end of Section C of this assignment, how did you use a browser to verify the "*" feature?

### E. Extra Credit
[+1 E.C.] per method: extend your sandbox app to use all of the methods in Section D that you didn't already use in your sandbox by the end of Section C. Test and a-c-p each method until you're done, then **submit** the latest git commit hash URL.
