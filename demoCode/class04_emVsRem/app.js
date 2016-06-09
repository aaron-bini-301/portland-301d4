//$(function() {
var canvas = $('canvas')[0];
Ndivs = 5;

var divNames = [];
for (var ii = 0; ii < Ndivs; ii++) { divNames.push('Level ' + ii); }

// Dummy data
function getDivWidths(arg) {
  if (arg) { return [10, 20, 10, 20, 0] };
  return [.5, 1, 2, 4, 8];
}

var dwA = getDivWidths(0);
var dwB = getDivWidths(1);

// Instantiate a chart (based on Chart.js documentation)
var ch = new Chart(canvas, {
  type: 'bar',
  data: {
    labels: divNames,
    datasets: [{ label: 'Set A div widths',
                 data: dwA  // div widths
               },
               { type: 'line',
                 label: 'Set B div widths',
                 data: dwB  // div widths
               }],
    options: { scales: { yAxes: [{ ticks: { beginAtZero:true } }] } }
  }
});
//});