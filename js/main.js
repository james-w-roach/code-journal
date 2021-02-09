/* global data */
/* exported data */

var $url = document.querySelector('.image');
var $input = document.querySelector('#url');

function changeImage(event) {
  $url.src = $input.value;
}

$input.addEventListener('input', changeImage);

var $form = document.querySelector('.form');
var $titleInput = document.querySelector('#title');
var $notesInput = document.querySelector('#notes');

function onSubmit(event) {
  var object = {};
  object['image URL'] = $input.value;
  object['entry title'] = $titleInput.value;
  object.notes = $notesInput.value;
  object.nextEntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(object);
  $url.src = 'images/placeholder-image-square.jpg';
  $titleInput.value = '';
  $notesInput.value = '';
  $input.value = '';
}

$form.addEventListener('submit', onSubmit);
