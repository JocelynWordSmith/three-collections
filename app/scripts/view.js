'use strict';

var LeftView = Backbone.View.extend({

	className: 'left-bound',

	events: {
		"click .set-left" : "setLeft",
		"click .set-center" : "setCenter",
		"click .set-right" : "setRight",
	},

	template: _.template($('.image-view').text()),

	initialize: function() {

		$('.container-left').append(this.el);
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
		this.model.destroy();
		this.render();

	},
	setCenter: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-two', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy();
		this.render();

	},
	setRight: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-three', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy();
		this.render();

	},
});

var CenterView = Backbone.View.extend({

	className: 'center-bound',

	events: {
		"click .set-left" : "setLeft",
		"click .set-center" : "setCenter",
		"click .set-right" : "setRight",
	},

	template: _.template($('.image-view').text()),

	initialize: function() {

		$('.container-center').append(this.el);
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	setLeft: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-one', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy();
		this.render();

	},
	setCenter: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-two', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy();
		this.render();

	},
	setRight: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-three', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy();
		this.render();

	},
});

var RightView = Backbone.View.extend({

	className: 'right-bound',

		events: {
		"click .set-left" : "setLeft",
		"click .set-center" : "setCenter",
		"click .set-right" : "setRight",
	},

	template: _.template($('.image-view').text()),

	initialize: function() {

		$('.container-right').append(this.el);
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	setLeft: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-one', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy();
		this.render();

	},
	setCenter: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-two', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy();
		this.render();

	},
	setRight: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/js-items-three', { 
			url		: this.model.attributes.url, 
			caption	: this.model.attributes.caption
		});
		this.model.destroy();
		this.render();

	},
});