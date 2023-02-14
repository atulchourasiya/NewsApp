const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
	title: {
		type: String,
		required:true
	},
	detail: {
		type: String,
		required:true
	},
	date: {
		type: String,
		required:true
	},
	
});

const News = mongoose.model('news', NewsSchema);
module.exports = News;
