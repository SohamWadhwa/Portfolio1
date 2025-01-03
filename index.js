const express = require('express');
const app = express();

const port = 8080;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/assets', express.static('assets'));

app.get('/Portfolio', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
