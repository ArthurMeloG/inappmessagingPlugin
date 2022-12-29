function FirebaseInappmessaging() {}

FirebaseInappmessaging.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.FirebaseInappmessaging = new FirebaseInappmessaging();
  return window.plugins.toastyPlugin;
};

cordova.addConstructor(FirebaseInappmessaging.install);
