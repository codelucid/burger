// Here we are importing the ORM to create functions that will interact with the database
let orm = require("../config/orm.js");

let burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(response) {
            cb(response);
        });
    },
    // The vaibles cols and vals are arrays
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(response) {
            cb(response);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(response) {
            cb(response);
        });
    }
};

module.exports = burger;