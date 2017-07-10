import Ember from 'ember';

export function truncateText(opts) {
  const body = opts[0];
  const limit = opts[1];
  if (body) {
    return body.slice(0, limit ? limit : body.length);
  } else {
    return "";
  }
}

export default Ember.Helper.helper(truncateText);
