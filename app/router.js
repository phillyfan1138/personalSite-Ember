import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';
const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});
Router.map(function() {
  this.route('projects');
  this.route('research');
  this.route('about');
  this.route('creditrisk');
  this.route('marketrisk');
  this.route('operationalrisk');
  this.route('opsrisk-documentation');
  this.route('creditrisk-documentation');
  this.route('marketrisk-documentation');
  this.route('blog');
});

export default Router;
