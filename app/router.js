import EmberRouter from '@ember/routing/router';
import config from 'loyalty-stamp-card/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('info');
  this.route('orders');
  this.route('stamps')
});
