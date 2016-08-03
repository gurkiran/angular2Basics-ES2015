(function(app) {
  var Component = ng.core.Component;
  var Inject = ng.core.Inject;
  var QuoteService = app.QuoteService;

  @Component({
    selector: 'random-quote',
    template: '<em>{{quote.line}}</em> - {{quote.author}}'
  })
  
  class RandomQuoteComponent{
    constructor(@Inject(QuoteService) quoteService) {
      quoteService.generateRandomQuotes(3, 2000, quote => this.quote = quote);
    }
  }

  app.RandomQuoteComponent = RandomQuoteComponent;

})(window.app || (window.app = {}));
