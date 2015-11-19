Accounts.onCreateUser(function(options, user) {
  // Use provided profile in options, or create an empty profile object
  user.profile = options.profile || {};
  user.roles = ["User"];
  Roles.addUsersToRoles(user, user.roles);
  // Add additional fields
  console.log("onCreateUserCalled");
  return user;
});