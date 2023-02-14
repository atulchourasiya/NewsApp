const express = require('express');
const connectToMongoose = require('./config/mongo');
const app = express();
const news = require('./routes/news');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

connectToMongoose();
app.use(express.json());

app.use(
	express.static(path.join(__dirname, 'build'), {
		etag: false,
		maxAge: '1000'
	})
);

app.use(
	cors({
		origin: `${process.env.CLIENT_URL}`,
		methods: 'GET,POST,PUT,DELETE',
		credentials: true
	})
);
app.use('/news', news);

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);
});