const Admin = require('../models/adminmodel');
const User = require('../models/usermodel');

const adminController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const admin = await Admin.findOne({ username });

      if (!admin || admin.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate a JWT token for authentication
      const token = generateToken(admin._id);
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  dashboard: async (req, res) => {
    try {
      // Retrieve user credentials from the database (limit to 2)
      const users = await User.find().limit(2);
      res.json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createUser: async (req, res) => {
    try {
      // Implement logic to create a new user
      // For simplicity, assume req.body contains necessary user data
      const newUser = await User.create(req.body);
      res.json({ newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  viewUser: async (req, res) => {
    try {
      // Implement logic to view detailed user information
      const userId = req.params.userId;
      const user = await User.findById(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      // Implement logic to delete a user
      const userId = req.params.userId;
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

// Helper function to generate JWT token
function generateToken(userId) {
  // Implement your token generation logic (use libraries like jsonwebtoken)
  // For simplicity, return a dummy token
  return 'dummyToken';
}

module.exports = adminController;
