const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:MyCon42DBClus1Now131@cluster0.8ikevav.mongodb.net/orientxpress';


mongoose.connect(connectionString, {connectTimeoutMS: 2000})
   .then(() => console.log('Database Connected'))
     .catch(error => console.error(error));