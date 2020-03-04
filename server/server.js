//https://expressjs.com/en/guide/routing.html
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

//customize express server
app.use(express.static(publicPath));
//start the server
//request = cont. inf about some request obj; 
//response = manipulate the resp your express server makes to whoever made to http request/
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(/*3000*/port, () => {
    console.log('server is alive!')
});