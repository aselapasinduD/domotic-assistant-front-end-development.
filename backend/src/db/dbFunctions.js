// Mock user database
const users = [
  { id: 1, email: 'test@example.com', password: '$2a$12$Pf1oqYICSfHg.YNorpptmuc1D81S18.p1YjzFNv6sarRcVRns19kW', name: 'Test User' }
];

// Mock database functions
const dbFunctions = {
  // User authentication
  findUserByEmail: async (email) => {
    return users.find(user => user.email === email);
  },

  createUser: async (userData) => {
    const newUser = {
      id: users.length + 1,
      ...userData
    };
    users.push(newUser);
    return newUser;
  },

  // Account management
  getUserById: async (userId) => {
    return users.find(user => user.id === userId);
  },

  updateUser: async (userId, updateData) => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) return null;
    
    users[userIndex] = { ...users[userIndex], ...updateData };
    return users[userIndex];
  },

  deleteUser: async (userId) => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) return false;
    
    users.splice(userIndex, 1);
    return true;
  }
};

module.exports = dbFunctions; 