import mixpanel from 'mixpanel-browser';

mixpanel.init('745a78df2eb969bd817d21345e9ff944');

function trakcer(value, data) {
  mixpanel.track(value, data);
}

export { trakcer };
