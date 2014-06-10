var LeftView = Backbone.View.extend({

	className: 'left-bound',

	template: _.template$('.image-view').text()),

	initialize : function() {

		$('.container-left').append(this.el);
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},
});

var CenterView = Backbone.View.extend({

	className: 'center-bound',

	template: _.template$('.image-view').text()),

	initialize : function() {

		$('.container-center').append(this.el);
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},
});

var RightView = Backbone.View.extend({

	className: 'right-bound',

	template: _.template$('.image-view').text()),

	initialize : function() {

		$('.container-right').append(this.el);
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},
});