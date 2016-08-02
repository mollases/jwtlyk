(function(app) {
  app.NoteComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/note/note.html'
    })
    .Class({
      constructor: function() {
        this.greeting = 'Dear Lauren';
        this.message = 'I love your attitude, but I am too shy to say so in person. Writing seemed easier.';
        this.goodbye = 'Sincerely';
        this.from = 'Admas'
      }
    });
})(window.app || (window.app = {}));

(function (app) {

  ng.router.RouteConfig([
    { path: '/home', component: app.NoteComponent, as: 'Home', useAsDefault: true},
    { path: '/test', component: app.NoteComponent, as: 'Test'}
  ])(app.Main);
})(window.app || (window.app = {}));
