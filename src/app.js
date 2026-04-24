const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/errorHandler.js');
const ArticleRoutes = require('./routes/article.route.js');
const UserRoutes = require('./routes/user.route.js');


const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);


app.use('/api', ArticleRoutes);

app.use('/api/users', UserRoutes);

app.use(errorHandler);


module.exports = app;