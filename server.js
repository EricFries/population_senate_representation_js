const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));

// send the user to index html page regarless of the url
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port);
