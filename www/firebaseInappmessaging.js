function FirebaseInappmessaging() {}

FirebaseInappmessaging.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.FirebaseInappmessaging = new FirebaseInappmessaging();
  return window.plugins.FirebaseInappmessaging;
};

cordova.addConstructor(FirebaseInappmessaging.install);
