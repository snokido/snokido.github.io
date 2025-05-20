// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function() {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

  // TODO: This code is in need of a refactor (along with the rest)
  var storage           = new LocalStorageManager;
});
