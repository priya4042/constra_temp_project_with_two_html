
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('#loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', function () {
        window.location.href = '../../../projects/nicetempapp/src/index.html';
      });
    }
  });
  