var changeButton = document.querySelector('#change-me');

changeButton.addEventListener('click', function() {
  var firstHeading = document.querySelector('.important-header');
  firstHeading.classList.toggle('newcolor');
});

changeButton.addEventListener('click', function() {
  var firstHeading = document.querySelector('.important-header');
  firstHeading.classList.toggle('brandnewcolor');
});