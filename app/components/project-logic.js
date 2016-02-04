import Ember from 'ember';

export default Ember.Component.extend({
  socketIOService: Ember.inject.service('socket-io'),
  socket:'',
  willRender() {
    var self=this;
    self._super.apply(this, arguments);
    this.get('socketIOService').closeSocketFor('http://localhost:7000/');
    self.socket = this.get('socketIOService').socketFor('http://localhost:7000/');
    self.socket.on('connect', function() {
    }, this);
  },
  willDestroy() {
    this.get('socketIOService').closeSocketFor('http://localhost:7000/');
  }
});