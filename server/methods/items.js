Meteor.methods({
  'Items.insert': function (params) {
    Items.insert(params);
	console.log("Methods: " +params);
  }
});
