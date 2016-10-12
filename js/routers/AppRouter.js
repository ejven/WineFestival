app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":                         "home",
        "programitem/:id":          "programitem",
        "map":                      "map",
        "menu" : 					"menu",
        "program/:id" :				"program"
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.homeView.$el);
        
        $('.page-right-half').remove();
	        $('.page-left-half').remove();
    },

    programitem: function (id) {
        var programitem = new app.models.ProgramItem({id: id});
        programitem.fetch({
            success: function (data) {
                app.slider.slidePage(new app.views.ProgramItemView({model: data}).render().$el);
            }
        });
    },

    map: function (id) {
        app.slider.slidePage(new app.views.MapView().render().$el);
    },
    
    menu: function () {
    	if (!app.menuView) {
    		app.menuView = new app.views.MenuView();
    		app.menuView.render();
    	}
    
    	app.slider.slidePageFrom(app.menuView.$el, 'page-right-half');
    },
    
    program: function(id) {
        var program = new app.models.ProgramItemCollection();
        program.fetch({
            success: function (data) {
                app.slider.slidePage(new app.views.ProgramView({model: data}).render().$el);
            }
        });
    }

});