var $ = global.jQuery;

module.exports = ExampleModule;

function ExampleModule(opts) {
  if (!(this instanceof ExampleModule)) {
    return new ExampleModule(opts);
  }

  console.log('ExampleModule initialized.');

  // Script goes here

}
