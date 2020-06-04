let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();
// This will use static content for the app from the "public" directory
app.use(express.static("public"));
// This will parse the application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// This will set the Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// This will import the routes and give the server access to them
let routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start up the server so it can listen to client requets
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});