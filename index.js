require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notifyRoutes = require('./routes/notifyRoutes');
const { validateNotify } = require('./validators/notifyValidator');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/notify', validateNotify, notifyRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});