import Ember from 'ember';
import fetch from 'ember-fetch/ajax';


export default Ember.Route.extend({
  model(params) {
    return fetch(`http://localhost:3535/post/${params.id}`)
      .then(function(response) {
        return fetch(`http://localhost:3535/post/${response.id}/comments`)
          .then(function(comments) {
            return {
              post: response,
              comments: comments
            };
          });
      });
  }
});
