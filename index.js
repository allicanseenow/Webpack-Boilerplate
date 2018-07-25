// require('babel-register')({
//   cache: true,
// });

import http from 'http';
import app, {a} from './server/app';

const server = http.createServer(app);
let currentApp = app;

console.log('reach here')
server.listen(3000, () => {
  console.log('listening on 3000 ----')
});

if (module.hot) {
  module.hot.accept('./server/app', () => {
    console.log('reloading here')
    console.log('a is ', a)
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  });
}