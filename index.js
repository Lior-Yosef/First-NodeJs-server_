const express = require('express');
const app = express();
// const express = require('express')();
const port = 8000;
app.listen(port, () => {
 console.log('Example app listening on port 3000!');
});
app.get('/', (req, res) => {
 res.send('First express!');
});
app.get('/1', (req, res) => {
 res.send('Hello Lior!');
});
