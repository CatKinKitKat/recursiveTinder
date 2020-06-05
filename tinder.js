var fun = function () {
  document.querySelector('[aria-label="Like"]').click();
  setTimeout(fun, 100);
};
setTimeout(fun, 100);
