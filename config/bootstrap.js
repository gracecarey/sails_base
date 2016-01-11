/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var crypto    = require('crypto');

module.exports.bootstrap = function(cb) {

  admin_username = sails.config.permissions.adminUser.username
  admin_email = sails.config.permissions.adminUser.email
  admin_password = sails.config.permissions.adminUser.password

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  User.findOrCreate(
    {username: admin_username},
    {username: admin_username, email: admin_email})
  .exec(
    function(err, user){
      if (err){
          if (err.code === 'E_VALIDATION') {
            if (err.invalidAttributes.email) {
              console.log('error: Error.Passport.Email.Exists');
            } else {
              console.log('error: Error.Passport.User.Exists');
            }
          }
          return cb(err)
      }
      var token = crypto.randomBytes(48).toString('base64');
      Passport.findOrCreate(
        {user: user.id},
        {protocol: 'local', password: admin_password, user: user.id, accessToken : token})
      .exec(function(err, passport){
        if (err) {
          if (err.code === 'E_VALIDATION') {
            console.log('error: ', 'Error.Passport.Password.Invalid');
          }
          return user.destroy(function (destroyErr) {
            cb(destroyErr || err);
          });
        }

        cb();
        sails.services.passport.loadStrategies();
      });
    });
};

// Passport.create({
//       protocol    : 'local'
//     , password    : password
//     , user        : user.id
//     , accessToken : token
