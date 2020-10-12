const mongoose = require('mongoose');
const schema = mongoose.Schema;

const siteSchema = new schema({
    name: {
        type: String
    },
    city: {
        type: String

    },
    email: {
        type: String
    },
    password: {
        type: String
    }

});

const siteModel = mongoose.model('siteModel', siteSchema);

module.exports = siteModel;