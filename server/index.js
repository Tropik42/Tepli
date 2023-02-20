require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api/v1', router);

const PORT = process.env.PORT || 5000;

try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
} catch (error) {
    console.log(error);
}
