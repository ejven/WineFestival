var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "MapView", "MenuView", "ProgramView", "ProgramListItemView", "ProgramItemView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});