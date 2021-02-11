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

function beforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}

window.addEventListener('beforeunload', beforeUnload);
