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

  if (data.editing === null) {
    object.nextEntryId = data.nextEntryId;
    object.dataEntryId = data.nextEntryId - 1;
    data.nextEntryId++;
    data.entries.unshift(object);
    $ul.prepend(entryDOM(object));
  } else {
    for (var i = 0; i < data.entries.length; i++) {
      if (data.editing.dataEntryId === data.entries[i].dataEntryId) {
        data.editing.entryTitle = object.entryTitle;
        data.editing.entryNotes = object.entryNotes;
        data.editing.imageURL = object.imageURL;
        $ul.replaceChild(entryDOM(data.editing), $ul.children[i]);
      }
    }
  }

  $form.reset();
  $url.src = 'images/placeholder-image-square.jpg';

  $form.className = 'form hidden';
  $entriesSection.className = 'entry-page';
  data.view = 'entries';
  data.editing = null;
}

$form.addEventListener('submit', onSubmit);

var $ul = document.querySelector('ul');

function entryDOM(object) {
  var $li = document.createElement('li');
  $li.className = 'list-item';

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
  $column2.className = 'column-half right';
  $li.appendChild($column2);

  var $title = document.createElement('h2');
  $title.className = 'entry-title';
  $title.textContent = object.entryTitle;
  $column2.appendChild($title);

  var $notes = document.createElement('p');
  $notes.textContent = object.entryNotes;
  $column2.appendChild($notes);

  var $editContainer = document.createElement('div');
  $editContainer.className = 'edit-container';
  $column2.appendChild($editContainer);

  var $edit = document.createElement('img');
  $edit.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png');
  $edit.setAttribute('data-entry-id', (object.nextEntryId - 1));
  $edit.className = 'edit-icon';
  $editContainer.appendChild($edit);

  return $li;
}

function loadDOM(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var domTree = entryDOM(data.entries[i]);
    $ul.appendChild(domTree);
  }
}

window.addEventListener('DOMContentLoaded', loadDOM);

var $entriesNav = document.querySelector('.entries');
var $entriesSection = document.querySelector('.entry-page');
var $body = document.querySelector('body');
var $button = document.querySelector('.button');
var $formHeader = document.querySelector('.form-header');

function changeView(event) {
  if (event.target === $entriesNav) {
    $form.className = 'form hidden';
    $entriesSection.className = 'entry-page';
    data.view = 'entries';
    data.editing = null;
  } else if (event.target === $button) {
    $entriesSection.className = 'entry-page hidden';
    $form.className = 'form';
    data.view = 'entry-form';
    $form.reset();
    $formHeader.textContent = 'New Entry';
  }
}

$body.addEventListener('click', changeView);

if (data.view === 'entries') {
  $form.className = 'form hidden';
  $entriesSection.className = 'entry-page';
} else {
  $entriesSection.className = 'entry-page hidden';
  $form.className = 'form';
}

function editEntry(event) {
  var dataId = event.target.getAttribute('data-entry-id');
  var lastEntry = (data.entries.length - 1);
  if (event.target.className === 'edit-icon') {
    var currentObject = data.entries[(lastEntry - dataId)];
    data.editing = currentObject;
    $entriesSection.className = 'entry-page hidden';
    $form.className = 'form';
    data.view = 'entry-form';
    $formHeader.textContent = 'Edit Entry';
    $titleInput.value = data.editing.entryTitle;
    $notesInput.value = data.editing.entryNotes;
    $urlInput.value = data.editing.imageURL;
  }
}

$ul.addEventListener('click', editEntry);
