var express = require("express");
var app = express();
const client = require('./dbConnection');

let router = require('./routes/router'); 

app.use(express.static(__dirname + '/')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router); 

var port = process.env.port || 3000;

client.connect(err => {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    } else {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log("App listening to: " + port);
        });
    }
});

module.exports = app; 