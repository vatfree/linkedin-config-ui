Package.describe({
  name: 'pauli:linkedin-config-ui',
  version: '3.0.0',
  // Brief, one-line summary of the package.
  summary: 'Blaze configuration templates for LinkedIn OAuth, use with Meteor 1.6.1 & up',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/PoBuchi/pauli-linkedin-config-ui',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.use('templating@1.2.13', 'client');

  api.addFiles('linkedin-login-button.css', 'client');
  api.addFiles(
    ['linkedin-configure.html', 'linkedin-configure.js'],
    'client');
});
