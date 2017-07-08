  import Ember from 'ember';
  import fetch from 'ember-fetch/ajax';

  export default Ember.Route.extend({
    model() {
      return fetch('http://localhost:3535/posts')
        .then(function(response) {
          return response;
        });
    }
  });
