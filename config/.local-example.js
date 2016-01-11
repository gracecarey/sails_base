/**
 * Modify and copy to config/local.js
 */

module.exports = {
   permissions : {
    adminUser : {
      email : "admin@fake.com",
      password :"admin123"
    }
  },
  session: {
    secret: '0000000000000000000000000000000'
  }
};
