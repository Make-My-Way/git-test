document.addEventListener('DOMContentLoaded', function () {
  var parentMenuItems = document.querySelectorAll('.menu__list__item');

  parentMenuItems.forEach(function (parentMenuItem) {
    parentMenuItem.addEventListener('mouseover', function () {
      var dropMenu = parentMenuItem.querySelector('.menu__list__drop-menu');
      if (dropMenu) {
        dropMenu.classList.add('is-show');
      }
    });

    parentMenuItem.addEventListener('mouseout', function () {
      var dropMenu = parentMenuItem.querySelector('.menu__list__drop-menu');
      if (dropMenu) {
        dropMenu.classList.remove('is-show');
      }
    });
  });
});

