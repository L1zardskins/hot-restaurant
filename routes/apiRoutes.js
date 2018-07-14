var express = require('express');

var app = express();

var tableData = require('../data/tableData');
var waitListData = require('../data/waitListData.js');


module.exports = function (app) {
    app.get("/api/tables", function (req, res) {
        res.json(tableData)
    })

    app.get("/api/waitlist", function (req, res) {
        res.json(waitListData)
    })

    app.post("/api/tables", function (req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            waitListData.push(req.body);
            res.json(false);
        }

    });
};
