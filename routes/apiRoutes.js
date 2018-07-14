var tableData = require('../data/tableData');
var waitListData = require('../data/waitListData');


module.exports = function (app) {
    app.get("/api/tables", function (req, res) {
        res.json(tableData)
    })
};