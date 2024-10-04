document.getElementById('time-machine').innerHTML = `
  <h2>Time Machine (Real)</h2>
  <button id="history">History</button>
`;

document.getElementById('history').addEventListener('click', function() {
  // Random history event generation here
  alert('Random historical event!');
});
