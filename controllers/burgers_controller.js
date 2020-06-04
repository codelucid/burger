let express = require("express");

let router = express.Router();

// This imports the model (burger.js) to use its database functions
let burger = require("../models/burger.js");

// Here we create all our routes and set up logic within those routes where required
router.get("/", function(request, response) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(request, response) {
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        request.body.burger_name, request.body.devoured
    ], function(result) {
        // This will send back the id of the new burger
        response.json({ id: result.insertId });
    
    });
});

router.put("api/burgers/:id", function(request, response) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: request.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If the rows weren't changed, then the ID must not exist, so 404
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

module.exports = router;