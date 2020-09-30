const express = require('express');
const app = express();
const port = 3000;
const productsRoute = require('./routes/products');


app.use('/products', productsRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});