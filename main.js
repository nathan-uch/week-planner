var data = {
  sun: [],
  mon: [],
  tues: [],
  wed: [],
  thurs: [],
  fri: [],
  sat: []
};

var $addEntry = document.querySelector('#add-entry-btn');
var $submit = document.querySelector('#submit-btn');
var $modal = document.querySelector('.modal');
var $dayOfWeek = document.querySelector('.day-of-week');
var $time = document.querySelector('.time');
var $description = document.querySelector('.text-area');
var $dayButton = document.querySelector('.day');

$addEntry.addEventListener('click', addEntry);
$submit.addEventListener('click', submitFire);
$dayButton.addEventListener('click', function () {});

function addEntry() {
  $modal.className = 'modal';
}

function submitFire() {
  $modal.className = 'modal hidden';
  var entry = {
    dayOfWeek: $dayOfWeek.value,
    time: $time.value,
    description: $description.value
  };
  data[entry.dayOfWeek].push(entry);
}
