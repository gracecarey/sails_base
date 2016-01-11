/**
 * HomeController
 */
var HomeController = {
  /**
   * Render the login page
   */
  index: function (req, res) {
    // Render the `auth/login.ext` view
    res.view({
     errors : req.flash('error')
    });
  }
};

module.exports = HomeController;
