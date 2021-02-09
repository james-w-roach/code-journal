/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function beforeUnload(event) {
  if (Boolean(localStorage.getItem('data')) === true) {
    var previousJSON = localStorage.getItem('data');
    var data2 = JSON.parse(previousJSON);
  } else {
    data2 = data;
  }

  var data2JSON = JSON.stringify(data2);
  localStorage.setItem('data', data2JSON);
}

window.addEventListener('beforeunload', beforeUnload);
