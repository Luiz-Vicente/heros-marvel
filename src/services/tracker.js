import mixpanel from 'mixpanel-browser';

mixpanel.init('');

function track(value, data) {
  mixpanel.track(value, data);
}

export { track };
