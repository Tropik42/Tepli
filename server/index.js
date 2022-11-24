require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/api/v1', router);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
} catch (error) {
    console.log(error);
}
