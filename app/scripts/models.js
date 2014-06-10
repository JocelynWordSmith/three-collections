var ItemModel = Backbone.Model.extend ({

	idAttribute: _id,

	defaults: {
		'url' : 'http://www.popkitten.com/wp-content/uploads/2011/12/Sad-Cat-1.jpg',
		'caption' : 'default caption',
	},
});

//first item collection
var ItemCollectionOne = Backbone.Collection.extend ({

	model: ItemModel,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/items-one',

});
//second item collection
var ItemCollectionTwo = Backbone.Collection.extend ({

	model: ItemModel,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/items-two',

});
//third item collection
var ItemCollectionThree = Backbone.Collection.extend ({

	model: ItemModel,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/items-three',

});
