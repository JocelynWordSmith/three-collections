var AppRouter = Backbone.Router.extend ({

	initialize: function() {
		console.log('app router has initialized');

		var leftColumn = new ItemCollectionOne();
		var centerColumn = new ItemCollectionTwo();
		var rightColumn = new ItemCollectionThree();

			leftColumn.fetch().done(function() {	
				leftColumn.each(function(item) {
					new LeftView({
						model: item
					})
				})
			)},

			centerColumn.fetch().done(function() {	
				centerColumn.each(function(item) {
					new centerView({
						model: item
					})
				})
			)},

			rightColumn.fetch().done(function() {	
				rightColumn.each(function(item) {
					new RightView({
						model: item
					})
				})
			)},

	},
});			
				
				var router = new appRouter();
				Backbone.history.start();