//create an express server 
const express = require('express');
const router = require('./routes/userRoutes');
const projectRouter=require('./routes/projectRoutes');

//add swagger documentation
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use('/api/', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//for the engagements
app.use('/api/projects', projectRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});



//start a server on port 3000
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

