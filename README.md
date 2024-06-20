## How to initiate the Backend coding through the vscode terminal
- Open the empty folder in the vscode
- write `npm init -y`/. (it is just initiate the package.json file which is made by us )
-Make the package.json file changes according to your choice.
- Install the express.js by writing `npm install express` in the terminal.
- Create a new file named `app.js` and write the following code in it.
- Modify the Script in the package.json.
-e.g ``"start":"node index.js"``
-To run the express we have to just write code only `npm run start`

### Why should we have to install the Nodemon package

- Whenever we are doing any modification in our code it is not getting reloaded by our browser so to make it simple we are adding the Nodemon pakage in our folder.

## We can fetch the api data in the form of object in our response route 

- e.g ``app.get('/github',(req,res)=>{``
    ``res.json(githubData);``
``})``

- here `res.json(githubData)` is used to fetch the api data in our page .
