# Deployments
To prepare for today's labs, try [this tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)

# "Getting started" using your own repo

The above tutorial relies on an existing repo that contains files not exactly like the repo you'll deploy. Now that you're familiar with that deployment, we can move to a set of steps that is tailored to buliding a deployment environment and workflow that is more suited for your blog app (and subsequently, your portfolio app):

## Develop on your laptop
1. `cd` to any folder inside your workspace for our course repo, then `git pull` to update your clone.
2. Unzip the starter code in (blog/starter-code.zip)[blog/starter-code.zip]
3. `cd` to the local workspace of one of **your** repos; create a new folder (e.g., "deploy_demo"), then copy starter-code to deploy_demo/, e.g.:<br>
   `mkdir deploy_demo`<br>
   `cd deploy_demo`<br>
   `cp -r [root of your clone of the class repo]/class13_wed_backend/blog/starter-code .` <-- NOTE the dot (".") at the end
4. `$ npm install` (this installs modules that the app needs; modules are listed in package.json)
5. Edit `[yourLocalWorkspaceFolder]/deploy_demo/scripts/repo.js` and `index.html` and change all occurrences of 'brookr' to your GitHub username.

6. Generate a new GitHub token (or use an existing one) that has **NO SCOPES**.

7. Copy the value of your GitHub token to an environment variable:

  **Option A**
  Add these lines to your main shell startup file:
    `GITHUB_TOKEN='your_long_github_token'`
    `export GITHUB_TOKEN`
  Open a new terminal window to launch a shell where this environment variable is set.

  **Option B**
  Add these lines to a secondary shell startup file (for me: `~/cfg/env`)
    `GITHUB_TOKEN='your_long_github_token'`
    `export GITHUB_TOKEN`
  Edit your main shell startup file (for me: `~/.profile`, but for you, it could be `~/.profile`, `~/.bashrc`, `~/.bash_profile`, `.zshrc`, etc.)
  and add lines similar to these:
    `if [ -f ~/cfg/env ]; then
      source ~/cfg/env
    fi`
  Open a new terminal window to launch a shell where this environment variable is set.

8. Run a node server
   `$ cd [yourLocalWorkspaceFolder]/deploy_demo`
   `$ node server.js`

9. Browse to `localhost:3000`
   - Click 'About'. Why do you not see any repos listed?
   - Change repo.js in the starter code to ask for github data from your **server** (the one that serves HTML, CSS, and JS files to your browser), not GitHub's server. IMPORTANT HINT: How do you specify a resource (a "noun") such that your blog app will work no matter which domain name the server has? It'd be ideal if your blog app works both with node running on your local machine and with Heroku hosting your app.
   - Verify you can see a list of your GitHub repositories on the 'About' page.

## Deploy to Heroku

10. Initialize a git repo<br>
   `$ cd ~/heroku_deploy_demo`<br>
   `$ git init`<br>
   `$ git add .`<br>
11. `$ git commit -m "initial version"`
12. `$ heroku login`
13. `$ heroku create heroku-demo2-ashe` but use your name instead of "ashe"
    Use `$ git remote -v` to verify that "heroku create..." creates a git remote.
    You may need `$ chmod 0600 ~/.netrc`
    Browse to your site (e.g., http://heroku-demo-ashe.HerokuApp.com) to see that it exists, but has minimal content.
14. `$ git push heroku master`
    This will show the web page: `$ heroku open`
    Click 'About'. Why does it not show a list of repositories?
15. In your Heroku Dashboard, click on your app, then
      Settings -> Config Vars -> create GITHUB_TOKEN
    Enter the "key" and "value" for your github token and click "Add".
    Note: Env. vars. on Heroku's server(s) are called "Config Vars"
16. Browse to your Heroku subdomain. If you didn't record the URL, you can see the subdomain in the Heroku Dashboard (or do $ git remote -v)
    Your URL is http://[app name as a subdomain name].herokuapp.com
    Click 'About'. Why does it now correctly show a list of repositories?

Do these if you didn't already do so during the "standard" Heroku tutorial.
  `$ heroku ps:scale web=1`
  `$ heroku open`
  `$ heroku logs --tail`  (filter e.g. --source heroku --tail)

## Heroku Dashboard
Note: you can use the dashboard for these tasks:
- List your deployed apps
- Rename an app (but better to choose your app’s name using "heroku create")
- Delete an app
