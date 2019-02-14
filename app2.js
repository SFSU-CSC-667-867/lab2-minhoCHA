const express = require('express');

const app = express()
const port = 3001; // only one app per port

app.get('/world', (req, res) => res.send('Hello Network!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))