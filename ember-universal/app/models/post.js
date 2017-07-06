import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  body: DS.attr(),
  title: DS.attr(),
  urlSlug: DS.attr()
});
