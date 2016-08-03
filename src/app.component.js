(function(app) {
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;
  var RandomQuoteComponent = app.RandomQuoteComponent;

  @Component({
    selector: 'my-app',
    directives: [RandomQuoteComponent],
    providers: [QuoteService],
    template: `
      <h1>Random Quote !!!</h1>
      <p><random-quote></random-quote></p>
      `
  })

  class AppComponent { }

  app.AppComponent = AppComponent;
  
})(window.app || (window.app = {}));
