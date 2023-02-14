const express = require('express');
const router = express.Router();
const News = require('../model/news');

router.get('/fetchAllNews', async (req, res) => {
	try {
		const news = await News.find();
		res.json(news);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Internal Server Error');
	}
});

router.post('/addNews', async (req, res) => {
	try {
		const { title, detail, date } = req.body;
		const newNews = new News({
			title,
			detail,
			date
		});
		const savedNews = await newNews.save();
		res.status(200).json(savedNews);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Internal Server Error');
	}
});

router.delete('/deleteNews/:id', async (req, res) => {
	try {
		newsAfterDelete = await News.findByIdAndDelete(req.params.id);
		res.json(newsAfterDelete);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Internal Server Error');
	}
});

module.exports = router;
