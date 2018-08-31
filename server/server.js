'use strict';

const path = require('path');
let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, '..')));

app.listen(8081, function(err){
	if(err){
		console.error(err);
		process.exit(1);
	}
	else console.log('Listening on 8081');
});