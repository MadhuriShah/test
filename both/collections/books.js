// Letting Meteor know that we want to save books
Books = new Mongo.Collection('books');

var schema = new SimpleSchema({
    title: {
        // Labels are used to reffer to this field in validation
        label: 'title',
        // Specifying the allowed type
        type: String
    },
    author: {
        label: 'author',
        type: String
    },
    rating: {
        type: Number,
        // We only want a rating from 0 to 10
        min: 0,
        max: 10
    }
});

Books.attachSchema(schema);
