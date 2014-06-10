'use strict';
var position;

var AppRouter = Backbone.Router.extend({


	initialize: function() {
		console.log('app router has initialized');

		var leftColumn = new ItemCollectionOne();
		var centerColumn = new ItemCollectionTwo();
		var rightColumn = new ItemCollectionThree();

		leftColumn.fetch().done(function() {
			leftColumn.each(function(item) {
				position = 'left';
				new ColumnView({
					model: item
				});
			});
		});

		centerColumn.fetch().done(function() {
			centerColumn.each(function(item) {
				position = 'center';
				new ColumnView({
					model: item
				});
			});
		});

		rightColumn.fetch().done(function() {
			rightColumn.each(function(item) {
				position = 'right';
				new ColumnView({
					model: item
				});
			});
		});

	},
});

var router = new AppRouter();
Backbone.history.start();