var data = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  currentDay: null
};

var $form = document.querySelector('form');
var $addEntry = document.querySelector('#add-entry-btn');
var $submit = document.querySelector('#submit-btn');
var $modal = document.querySelector('.modal');
var $dayOfWeek = document.querySelector('.day-of-week');
var $time = document.querySelector('.time');
var $description = document.querySelector('.text-area');
var $dayButton = document.querySelector('.weekday');
var $tableBody = document.querySelector('.table-body');
var $scheduledEvent = document.querySelector('#scheduledEvent');

$addEntry.addEventListener('click', addEntry);

$submit.addEventListener('click', submitFire);

$dayButton.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    $scheduledEvent.textContent = 'Scheduled Events for ' + event.target.getAttribute('data-day');
    displayDay(event.target.getAttribute('data-day'));
  }
});

function addEntry() {
  $modal.className = 'modal';
  $form.reset();
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
  $tdTime.textContent = entry.time;
  var $tdDescription = document.createElement('td');
  $tdDescription.textContent = entry.description;
  $tr.appendChild($tdTime);
  $tr.appendChild($tdDescription);

  return $tr;
}

function displayDay(day) {
  var $currentTableRows = document.querySelectorAll('tr');
  if ($currentTableRows.length < data[day].length + 1 && data.currentDay === day) {
    $tableBody.replaceChildren('');
    for (var i = 0; i < data[day].length; i++) {
      $tableBody.appendChild(renderEntry(data[day][i]));
    }
  } else if (day !== data.currentDay) {
    $tableBody.replaceChildren('');
    for (var x = 0; x < data[day].length; x++) {
      $tableBody.appendChild(renderEntry(data[day][x]));
    }
  }
}

// var previousTodosJSON = localStorage.getItem('currentStorage');
// if (previousTodosJSON !== null) {
//   data = JSON.parse(previousTodosJSON);
// }

// window.addEventListener('beforeunload', tasks);
// function tasks(event) {
//   window.localStorage.setItem('currentStorage', JSON.stringify(data));
// }
