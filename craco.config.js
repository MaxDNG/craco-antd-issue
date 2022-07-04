const CracoAntDesignPlugin = require('craco-antd');

module.exports = function cracoConfig({ env }) {
  return {
    plugins: [
      {
        plugin: CracoAntDesignPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };
};
