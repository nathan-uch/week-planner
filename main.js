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
var $dayButton = document.querySelector('.weekday');


var $scheduledEvent = document.querySelector('#scheduledEvent');
$addEntry.addEventListener('click', addEntry);
$submit.addEventListener('click', submitFire);
$dayButton.addEventListener('click', function (event) {

  if (event.target.tagName === 'BUTTON') {
    $scheduledEvent.textContent = 'Scheduled Events for ' + event.target.getAttribute('data-day');
    console.log(event.target.getAttribute('data-day'));

  }

});

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

function renderEntry(entry) {
  var $tr = document.createElement('tr');
  var $tdTime = document.createElement('td');
  $tdTime.textContent = entry.time
  var $tdDescription = document.createElement('td');
  $tdDescription.textContent = entry.description;
  $tr.appendChild($tdTime);
  $tr.appendChild($tdDescription);

  return $tr;
}

(renderEntry({dayOfWeek: 'Monday', time: '8:00', description: 'hello' }));
