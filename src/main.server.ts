import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';
import { ServerAppModule } from './server-app.module';

enableProdMode();
const app = express();
const port = 8000;

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', {index: false}));

// ROUTES.forEach((route) => {
  app.get('/**', (req, res) => {
    res.render('../dist/index', { req, res });
  });
// });

// redirection from safari notification to given external page
app.get('/redirect/**', (req, res) => {
  const location = req.url.substring(10);
  res.redirect(301, location);
});

app.post('/testPost', (req, res) => {
  res.status(200).send({receivedValue: req.body.exampleKey});
});

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});

