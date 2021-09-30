const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/pm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Data base connection is done!'))
    .catch(err => console.log('Error trying connect to DB: ' + err))