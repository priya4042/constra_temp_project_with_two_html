const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'nicetempapp',

  exposes: {
    
    './Module': './projects/nicetempapp/src/app/admin/admin.module.ts',
  
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
