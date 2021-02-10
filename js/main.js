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
  event.preventDefault();

  var object = {};
  object.imageURL = $urlInput.value;
  object.entryTitle = $titleInput.value;
  object.entryNotes = $notesInput.value;

  object.nextEntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(object);

  $form.reset();
}

$form.addEventListener('submit', onSubmit);

// var $ul = document.querySelector('ul'); //

function entryDOM(object) {
  var $li = document.createElement('li');
  $li.className = 'list-item';

  var $column1 = document.createElement('div');
  $column1.className = 'column-half';
  $li.appendChild($column1);

  var $container = document.createElement('div');
  $container.className = 'li-img-container';
  $column1.appendChild($container);

  var $img = document.createElement('img');
  $img.setAttribute('src', object.imageURL);
  $img.className = 'list-img';
  $container.appendChild($img);

  var $column2 = document.createElement('div');
  $column2.className = 'column-half';
  $li.appendChild($column2);

  var $title = document.createElement('h2');
  $title.className = 'entry-title';
  $title.textContent = object.entryTitle;
  $column2.appendChild($title);

  var $notes = document.createElement('p');
  $notes.textContent = object.entryNotes;
  $column2.appendChild($notes);

  return $li;
}

entryDOM();
