Ext.define('chirr.controller.page1.Page1Controller', {
    extend: 'Ext.app.Controller',

    requires: [
        'chirr.view.page1.i18n.Page1_en_EN',
        'chirr.view.page1.i18n.Page1_es_ES',
        'chirr.view.page1.Page1'
    ],

    config: {
        listen: {
            global: {
                eventOpenPage1: 'onOpenPage1'
            }
        }
    },

    onOpenPage1: function(){
        var page1 = new chirr.view.page1.Page1();
        Devon.App.openInContentPanel(page1);
    }
});
