// const webpack = require('webpack');
// const webpackConfig = require('./webpack/webpack.dev');
// const compiler = webpack(webpackConfig);

import express from 'express';
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'loves dae her' });
});
console.log(' bald blsdkjsdfdsfsdfdf--------------')



export default app;
export const a = 2;