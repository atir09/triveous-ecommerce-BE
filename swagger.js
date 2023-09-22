// ...........Importing NPM Packages............
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Triveous E-commerce API',
      version: '1.0.0',
      description: 'API for an e-commerce application',
    },
    securityDefinitions: {
      jwt_auth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
  },
  apis: ['./routes/*.js'], // Specify the path to your route files
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };