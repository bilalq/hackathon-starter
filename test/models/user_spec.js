var mongoose = require('mongoose');
var User = require('../../models/User');

describe('User model', function() {

  describe('constructor', function() {
    it('creates an object with sensible defaults', function() {
      var user = (new User()).toObject();

      user._id.id.should.be.a('string');
      user.profile.picture.should.be('');
      user.profile.website.should.be('');
      user.profile.location.should.be('');
      user.profile.gender.should.be('');
      user.profile.name.should.be('');
    });
  });

  describe('validations', function() {
  });

});
