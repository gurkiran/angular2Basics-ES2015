'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var _dec, _class;

  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;
  var RandomQuoteComponent = app.RandomQuoteComponent;

  var AppComponent = (_dec = Component({
    selector: 'my-app',
    directives: [RandomQuoteComponent],
    providers: [QuoteService],
    template: '\n      <h1>Random Quote !!!</h1>\n      <p><random-quote></random-quote></p>\n      '
  }), _dec(_class = function AppComponent() {
    _classCallCheck(this, AppComponent);
  }) || _class);


  app.AppComponent = AppComponent;
})(window.app || (window.app = {}));