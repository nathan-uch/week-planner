// var data = {
//   daysOfTheWeek: []
// }
var $addEntry = document.querySelector('#add-entry-btn');
function addEntry() {
  $addEntry.className = 'modal';
}

var $submit = document.querySelector('#submit-btn');
function submitFire() {
  $submit.className = 'modal-hidden';
}

$addEntry.addEventListener('click', addEntry);
$submit.addEventListener('click', submitFire);
