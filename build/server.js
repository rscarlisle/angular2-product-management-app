let express = require('express');
let path  = require('path');
let open  = require('open');
// import webpack from 'webpack';
// import config from '../webpack.config.dev';

const port = 3000;
const app = express();
// const compiler = webpack(config);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})
