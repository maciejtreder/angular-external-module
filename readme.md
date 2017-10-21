# Angular-external-module
Module created for use in [Angular Universal Progressive Web App - starter](https://github.com/maciejtreder/angular-universal-pwa).

## Live demo
[Angular Universal on serverless environment (AWS Lambda + API Gateway)](https://www.angular-universal-serverless.maciejtreder.com)


## Get Started
```sh
git clone https://github.com/maciejtreder/angular-external-module.git
cd angular-external-module
npm install
npm start
```
* Development mode (autoreload): ```npm run watch```
* Unit tests: ```npm run test:dev```
* Unit tests + development mode: ```npm run test:dev:host```

### Including into main app
When your module is ready to include to the main application
```sh
npm run build:aot
git push 
```

Inform compiler to include this module in the `tsconfig.json` file:
```
  "files": [
    "./node_modules/@angular-universal-serverless/external-module/release/src/externalComponent/external.module.d.ts"
  ]
```

Then include it and lazy-load in the main project (ie: [Angular Universal Progressive Web App - starter](https://github.com/maciejtreder/angular-universal-pwa)):
```sh
npm install --save git+https://github.com/maciejtreder/angular-external-module.git
```

```
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'external', loadChildren: '@angular-universal-serverless/external-module/release#ExternalModule'}
    ])
  ]
})
export class AppModule {
}
```

### Updating external module
If you will make changes to your module, rebuild it and publish again:
```sh
npm run build:aot
git push 
```

Then update and rebuild main application (ie: [Angular Universal Progressive Web App - starter](https://github.com/maciejtreder/angular-universal-pwa)):
```sh
npm update
npm run build:aot
```