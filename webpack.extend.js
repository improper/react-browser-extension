require('typescript-require')({ exitOnError: true, emitOnError: true });
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { default: fetchManifest } = require(path.join(__dirname,'src/config/manifest'))

function applyBrowserExtensionRequirements (env, config) {
  const isEnvDevelopment = env === 'development'
  const prepareManifest = {
    from: 'src/config/manifest.ts',
    transform: function () {
      const manifest = fetchManifest(!isEnvDevelopment)
      return Buffer.from(JSON.stringify(manifest, null, 2))
    },
    to: 'manifest.json'
  }
  const stagedFiles = { from: 'public', to: '' }
  const backgroundScripts = [{from: 'src/static/js', to: 'static/js'}]
  const devFiles = isEnvDevelopment ? [stagedFiles] : [];
  const publishFiles = [...devFiles, ...backgroundScripts, prepareManifest]
  // console.log(publishFiles); process.exit()
  config.plugins = [
    ...config.plugins,
    new CopyPlugin({
      patterns: publishFiles,
    }),
  ]
  config.output.path = isEnvDevelopment ? path.join(__dirname, 'build') : config.output.path

  return config
}

function applyDevServerBrowserExtensionRequirements (devServerConfig) {
  // Write `yarn start` files to WebPack's config.output.path
  devServerConfig.writeToDisk = true

  return devServerConfig
}

module.exports = {
  webpack: (config, env) => {
    config = applyBrowserExtensionRequirements(env, config)

    return config
  },
  devServer: (config, env) => {
    const newConfig = applyDevServerBrowserExtensionRequirements(config())
    return () => newConfig
  }
}
