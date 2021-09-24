// consolidate and import store modules for easy use //
// modules will be pulled in if they end with store.js //
const requireModule = require.context('.', false,  /\.store\.js$/);
const modules = {};

requireModule.keys().forEach(filename => {
  const moduleName = filename
  .replace(/(\.\/|\.store\.js)/g, '')
    modules[moduleName] = requireModule(filename).default || requireModule(filename);
});
 
 export default modules;