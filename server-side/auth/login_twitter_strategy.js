var passport = require('passport')
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = passport.use(new TwitterStrategy({
    consumerKey: "7csRC6sy2ha6v1tUDd9UzxJ0o",
    consumerSecret: "qimxLqiBbpjK62C8IYAAKQW9Hn95jcP772x8i7chmJxxoZpaQG",
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate({twitterID: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));