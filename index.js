const express = require('express');
const { connectMongo } = require('./connect');
const urlRoute = require('./routers/url');
const app = express();
const PORT = 8001;

connectMongo('mongodb://localhost:27017/short-url').then(() =>
    console.log("MongoDB is Connected")
);

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
