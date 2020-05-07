be-1

# Package
- [x] 1. Create boilerplate
- [x] 2. Install a package (google-auth-library) (don't forget to download the Service Account Credentials JSON)[https://github.com/googleapis/google-auth-library-nodejs#download-your-service-account-credentials-json-file]
- [x] 3. improve *dev experience* (install nodemon)
- [ ] 4. Create runscripts (run, serve, build)


## Q/A Ask yourself upon completion:
* **How does require work under the hood?**
*Node runs a single-threaded JS engine (specifically google V8 engine) outside a browser. It does this in an async way, which means it continues it jobs and will reply back when it receives an answer.*
* **What's the difference between dependencies and devDependencies?**
*One is for running the program while the other is for developing the program but is not needed in prod.*
* **What are the differences between global and local dependencies?**
*Global dependencies will be installed on the machine while local is just for that project it is installed in.*
* **What tasks can you run with npm run scripts?**
*`npm run scripts` runs the scripts object from `package.json`.*

# Serve
- [x] 1. Create a server (with express) (`npx express-generator`)
- [ ] 2. Create multiple routes
- [ ] 3. If route does not exist respond with 404
- [ ] 4. Serve  static files. (JS, CSS, IMG)

## Q/A Ask yourself upon completion:
* **How does the `app instance` work? What makes it possible you can do things like `app.get`  or `app.listen`?**
*xx*
* **What are the `req` and `res` parameters?**
*xx*
* **What are the differences between global and local dependencies?**
*xx*
* **The confusing part is that your laptop is both the client and the server. It's a `local development` environment.**
*xx*

----

(Installed express with nodemon so I don't have to restart the damn server)[https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website]