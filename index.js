const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

const theRecipe = {title: "Baked Feta Pasta", level: "Easy Peasy", ingredients: ["200g of feta", "300g of pasta", "250g of cherry tomatoes", "olive oil", "salt", "pepper", "garlic", "provence herbs", "parsley"], cuisine: "italian", dishType: "main_course", image: "https://i0.wp.com/deliciouslymediterranean.com/wp-content/uploads/2021/02/feta-pasta-1103.jpg?w=680&ssl=1", duration: 30, creator: "Chef Lisa"};


// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made

    // Iteration 2
//     Recipe.create(theRecipe)
//     .then(recipe => {console.log('New recipe added: ', recipe.title); })
//     .catch(error => {console.log('Error while adding the recipe', error); })

  // Iteration 3
  // Recipe.insertMany(data)
  // .then(data.forEach(recipe => {console.log('New recipe added: ', recipe.title);}))
  // .catch(error => {console.log('Error while adding the recipe', error); })

  // Iteration 4
  Recipe.findOneAndUpdate()

  // Iteration 5
  Recipe.deleteOne()

  // Iteration 6

  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  
