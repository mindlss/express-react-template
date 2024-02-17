const express = require('express')
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

app.use(cors())

app.use(express.static(path.join(__dirname, './build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(5000, () => console.log('server started on port 5000'))
