const fs = require('fs');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc')

const swaggerUIOptions = {
    customCss: '.swagger-ui .topbar { display: none }'
};

const swaggerDefinition = {
    info: {
        title: 'Swagger', // Title of the documentation
        version: '0.0.1', // Version of the app
        description: '123', // short description of the app
    },
    host: 'localhost:3000', // the host or url of the app
    basePath: '/api', // the basepath of your endpoint
};


// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition,
    // path to the API docs
    apis: ['./docs/*.yaml'],
};
// initialize swagger-jsdoc
const swaggerJSDocs = swaggerJSDoc(options);


const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDocs, swaggerUIOptions));


const server = app.listen(process.env.PORT || 3000, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${server.address().port}`);
});