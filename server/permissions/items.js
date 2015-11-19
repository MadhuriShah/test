Items.allow({
  'insert': function(userId, doc) {
	console.log("permission: "+doc);
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId;
  },
  'remove': function(userId, doc) {
    return userId;
  }
});
