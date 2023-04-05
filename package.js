Package.describe({
  name: 'vatfree:linkedin-config-ui',
  version: '5.0.1',
  summary:
    'Blaze configuration templates for LinkedIn OAuth, use with Meteor 2.3 & up',
  git:
    'https://github.com/vatfree/linkedin-config-ui',
  documentation: 'README.md',
})

Package.onUse(api => {
  api.versionsFrom('2.3')
  api.use('ecmascript')
  api.use('templating', 'client')

  api.addFiles('linkedin-login-button.css', 'client')
  api.addFiles(
    ['linkedin-configure.html', 'linkedin-configure.js'],
    'client',
  )
})
