const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
async function connectMongo(url){
    return mongoose.connect(url)
}

module.exports = {
    connectMongo,
};
