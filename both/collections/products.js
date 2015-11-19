Products = new Mongo.Collection('products');

var schema = new SimpleSchema({
	productName: {
		type: String,
		max: 70
	},
	description: {
		type: String,
		optional: true
	},
	categoryId: {
		type: String
	},
	subcategoryId: {
		type: String
	},
	unitPrice: {
		type: Number,
		decimal: true
	},
	/*inStockQty: {  not in form also include farmerId and imageId
		type: Number
	},*/
	qtyUnitId: {
		type: String
	},
	offerends:{
		type: Date,
		optional: true
	} 
});

Products.attachSchema(schema);