/* global data */
/* exported data */

var $url = document.querySelector('.image');
var $urlInput = document.querySelector('#url');

function changeImage(event) {
  if ($urlInput.value === '') {
    $url.src = 'images/placeholder-image-square.jpg';
  } else {
    $url.src = $urlInput.value;
  }
}

$urlInput.addEventListener('input', changeImage);

var $form = document.querySelector('.form');
var $titleInput = document.querySelector('#title');
var $notesInput = document.querySelector('#notes');

function onSubmit(event) {
  var object = {};
  object['image URL'] = $urlInput.value;
  object['entry title'] = $titleInput.value;
  object.notes = $notesInput.value;
  if (Boolean(localStorage.getItem('data')) === true) {
    var previousJSON = localStorage.getItem('data');
    var data2 = JSON.parse(previousJSON);
  } else {
    data2 = data;
  }
  object.nextEntryId = data2.nextEntryId;
  data2.nextEntryId++;
  data2.entries.unshift(object);
  var data2JSON = JSON.stringify(data2);
  localStorage.setItem('data', data2JSON);
  $url.src = 'images/placeholder-image-square.jpg';
  $titleInput.value = '';
  $notesInput.value = '';
  $urlInput.value = '';
  return data;
}

$form.addEventListener('submit', onSubmit);
