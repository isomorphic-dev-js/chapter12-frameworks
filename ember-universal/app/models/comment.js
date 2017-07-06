import DS from 'ember-data';

export default DS.Model.extend({
  postId: DS.attr(),
  message: DS.attr(),
  title: DS.attr(),
  user: DS.attr(),
  userImage: DS.attr()
});
