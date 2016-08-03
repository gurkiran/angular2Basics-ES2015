'use strict';

(function (app) {
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;
  var RandomQuoteComponent = app.RandomQuoteComponent;

  app.AppComponent = Component({
    selector: 'my-app',
    directives: [RandomQuoteComponent],
    providers: [QuoteService],
    template: '\n      <h1>Random Quote !!!</h1>\n      <p><random-quote></random-quote></p>\n      '
  }).Class({
    constructor: function AppComponent() {
      // empty
    }
  });
})(window.app || (window.app = {}));