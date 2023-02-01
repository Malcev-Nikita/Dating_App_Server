const mongoose = require('mongoose');
const log = require('./log')(module);

mongoose.connect('mongodb://gen_user:xajlqr88m9@188.225.46.230:27017/default_db?authSource=admin&directConnection=true');
var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});

db.once('open', function callback () {
    log.info("Connected to DB!");
});

const Scheme = mongoose.Schema;

// Schemes

const Article = new Scheme({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    images: [Images],
    modified: { type: Date, default: Date.now }
});

// validation
Article.path('title').validate(function (v) {
    return v.length > 5 && v.length < 70;
});

var ArticleModel = mongoose.model('Article', Article);

module.exports.ArticleModel = ArticleModel;