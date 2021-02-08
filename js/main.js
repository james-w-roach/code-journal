/* global data */
/* exported data */

var $url = document.querySelector('.image');
var $input = document.querySelector('#url');

function changeImage(event) {
  $url.src = $input.value;
}

$input.addEventListener('input', changeImage);
