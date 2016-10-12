app.views.ProgramView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        //this.model.reports.fetch();
        $(".scroller", this.el).html(new app.views.ProgramListView({model: this.model}).render().el);
        return this;
    },

    events: {
        "click .back-button": "back"
    },

    back: function() {
        window.history.back();
        return false;
    }

});
