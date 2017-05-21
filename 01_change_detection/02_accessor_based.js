// MobX
///////////////////////////////////////////////////////////////////////////////

import {observable} from 'mobx';

var appState = observable({
    timer: 0
});

autorun(() => {
  console.log("Time is: " + appState.timer)
})

setInterval(function tick() {
    appState.timer += 1;
}, 1000);
