/* "Try it yourself" editor: types in the textarea show live in the result frame.
   This is the only JavaScript in the site. */
document.querySelectorAll('.try').forEach(function (box) {
  var code = box.querySelector('textarea');
  var frame = box.querySelector('iframe');
  function run() { frame.srcdoc = code.value; }
  code.addEventListener('input', run);
  box.querySelector('[data-reset]').addEventListener('click', function () {
    code.value = code.defaultValue;
    run();
  });
  run();
});