require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const application = express();
const bodyParser = require('body-parser');

// const errorHandler = require('./src/app/middlewares/errorHandler');

// port load
const port = process.env.APP_PORT || 6000;

// routes load
// const adminRoute = require('./src/routes/admin');
// const bloggerRoute = require('./src/routes/blogger');

const corsOptions = {
  optionsSuccessStatus: 200,
  origin: [
    'http://localhost:4200',
    'https://penakita.site',
    'https://backofficedev.penakita.site',
    'https://bloggerdev.penakita.site',
    'https://monitordev.penakita.site',
    'https://penakita.id',
    'https://backoffice.penakita.id',
    'https://blogger.penakita.id',
  ],
};

application.use(cors(corsOptions));
application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
application.listen(port);
// application.use('/api/v1/admin', adminRoute);
// application.use('/api/v1/blogger', bloggerRoute);
application.use(express.static(path.join(__dirname)));
// application.use(errorHandler);

// eslint-disable-next-line no-console
console.log(`server run on ${process.env.APP_HOST}:${process.env.APP_PORT}`);
