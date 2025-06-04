const express= require('express');
const app = express();
require('./db/config');
const User = require('./db/User');

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Error registering user' });
  }
});
app.use(express.json()); 
app.use(cors());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});