require('dotenv').config()



const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./database/connectDB.js');
const logger = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/errorHandler.js');
const ArticleRoutes = require('./routes/article.route.js');
const UserRoutes = require('./routes/user.route.js');



connectDB(); 
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);


app.use('/api', ArticleRoutes);

app.use('/api/users', UserRoutes);

app.use(errorHandler);



app.listen(PORT, () => {
 console.log(`Server is listening on PORT ${PORT}`);
});
