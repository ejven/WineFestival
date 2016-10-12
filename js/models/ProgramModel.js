app.models.ProgramItem = Backbone.Model.extend({

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.program.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.ProgramItemCollection = Backbone.Collection.extend({

    model: app.models.ProgramItem,

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.program.all().done(function (data) {
                options.success(data);
            });
        }
    }

});
