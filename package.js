Package.describe({
  name: 'charlesoy:oauthyc-server',
  version: '1.0.0',
  summary: 'An OAuth2 Server implementation with single-sign-on & single-sign-out.',
  git: 'https://github.com/CharlesOy/oauthyc-server.git',
  documentation: 'README.md'
});

Npm.depends({
  'lodash': '4.17.2',
  'winston': '2.3.0',
  'oauth2-server': '2.4.1',
  'express': '4.14.0',
  'body-parser': '1.15.2',
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.use('webapp');

  api.use([], [
    'server',
    'client',
  ]);

  api.use([
    'meteorhacks:picker@1.0.3',
    'meteorhacks:aggregate@1.3.0',
  ], [
    'server',
  ]);

  api.use([
    'templating@1.2.15',
    'accounts-ui@1.1.9',
    'http@1.2.10',
    'kadira:flow-router@2.12.1',
    'kadira:blaze-layout@2.3.0',
    'aldeed:template-extension@4.0.0',
  ], [
    'client'
  ]);

  api.mainModule('server/main.js', ['server']);
  api.mainModule('client/main.js', ['client']);
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('charlesoy:oauthyc-server');
  api.mainModule('test/tests.js');
});