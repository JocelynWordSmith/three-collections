'use strict';

var ColumnView = Backbone.View.extend({

	className: 'left-bound',

	events: {
		"click .set-left" : "setLeft",
		"click .set-center" : "setCenter",
		"click .set-right" : "setRight",
	},

	template: _.template($('.image-view').text()),

	initialize: function() {

		$('.container-' + position).append(this.el);
		this.render();
	},

	render: function() {
		console.log(this.model.attributes.url)
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	setLeft: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-one', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy().done(function(){	
		$('.bound').html('');
		var router = new AppRouter();
		})

	},
	setCenter: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-two', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy().done(function(){	
		$('.bound').html('');
		var router = new AppRouter();
		})

	},
	setRight: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-three', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy().done(function(){	
		$('.bound').html('');
		var router = new AppRouter();
		})

	},
});

