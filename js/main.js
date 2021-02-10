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
  $urlInput.src = 'images/placeholder-image-square.jpg';
}

$form.addEventListener('submit', onSubmit);

var $ul = document.querySelector('ul');

function entryDOM(object) {
  var $li = document.createElement('li');
  $li.className = 'list-item';
  $ul.appendChild($li);

  var $column1 = document.createElement('div');
  $column1.className = 'column-half';
  $li.appendChild($column1);

  var $imgContainer = document.createElement('div');
  $imgContainer.className = 'li-img-container';
  $column1.appendChild($imgContainer);

  var $img = document.createElement('img');
  $img.setAttribute('src', object.imageURL);
  $img.className = 'list-img';
  $imgContainer.appendChild($img);

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

function loadDOM(event) {
  for (var i = 0; i < data.entries.length; i++) {
    entryDOM(data.entries[i]);
  }
}

window.addEventListener('DOMContentLoaded', loadDOM);

var $entriesNav = document.querySelector('.entries');
var $entriesSection = document.querySelector('.entry-page');
var $body = document.querySelector('body');
var $button = document.querySelector('.button');

function onClick(event) {
  if (event.target === $entriesNav) {
    $form.className = 'form hidden';
    $entriesSection.className = 'entry-page';
  } else if (event.target === $button) {
    $entriesSection.className = 'entry-page hidden';
    $form.className += 'form';
  }
}

$body.addEventListener('click', onClick);

// var $dataView = event.target.getAttribute('data-view'); //
