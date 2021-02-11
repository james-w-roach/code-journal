/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousJSON = localStorage.getItem('data');

if (previousJSON) {
  data = JSON.parse(previousJSON);
}

var $form = document.querySelector('.form');
var $entriesSection = document.querySelector('.entry-page');
var formView = localStorage.getItem('formView');
var entriesView = localStorage.getItem('entriesView');

if (entriesView) {
  $entriesSection.className = JSON.parse(entriesView);
}

if (formView) {
  $form.className = JSON.parse(formView);
}

function beforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);

  var classStringifyEntries = JSON.stringify($entriesSection.className);
  var classStringifyForm = JSON.stringify($form.className);
  localStorage.setItem('formView', classStringifyForm);
  localStorage.setItem('entriesView', classStringifyEntries);
}

window.addEventListener('beforeunload', beforeUnload);
