'use strict';
var numberOfLines = 3;
var redLine = [];
var greenLine = [];
var orangeLine = [];
// var start = '';
// var end = '';


redLine =
[
      'south station',
      'park st',
      'kendall',
      'central',
      'harvard',
      'porter',
      'davis',
      'alewife'
];

greenLine =
[   'haymarket',
    'government center',
    'park st',
    'bolyston',
    'arlington',
    'copley'
];

orangeLine =
[
    'north station',
    'haymarket',
    'park st',
    'state',
    'downtown crossing',
    'chinatown',
    'back bay',
    'forest hills'
];

var mbta = {};

//set up the dictionary using their names as keys and their stops as arrays in their respective values.
mbta.red = redLine;
mbta.green = greenLine;
mbta['orange'] = orangeLine;

var stopDifference = function(line, start, stop) {
  var diff = 0;
  diff = line.indexOf(start) - line.indexOf(stop);
  diff = Math.abs(diff);
  return diff;
}

var stopCalc = function(startLine, start, endLine, end)
{
  var stops = 0;
  //starts and stops on the same line
  if(startLine === endLine)
  {
    stops = stopDifference(startLine, start, end);
  }
  else
  {
    stops = stopDifference(startLine, start, 'park st') +
    stopDifference(endLine, end, 'park st');
  }
  //starts and stops on different lines
  return stops;
};

console.log(stopCalc(redLine, 'harvard', greenLine, 'haymarket'));

var lineSwitch = function(startLine, endLine) {
  if(startLine === endline)
  {
    return false;
  }
  else {
    return true;
  }
  return something;
};


var getLine = function(stop)
{
  var line = '';
  for(var lines in mbta)
  {
    console.log('Inside first for loop, Line = ' + line + 'and lines = ' + lines);
    for(var i = 0; i < mbta[lines].length; i++)
    {
    //console.log('inside second for loop, Line = ' + line);

    // console.log('The stop we\'re looking for is ' + mbta[lines][i] + ' the index of this stop in the ' + lines + ' array is: ' + mbta[lines].indexOf(stop));
      if(mbta[lines][i] === stop)
      {
        line = lines;
        return line;
      }
    }
  }
  return line;
}

var getColor = function(stop)
{
  for (var i = 0; i < redLine.length; i++)
    if (stop === redLine[i])
    {
      console.log('The line youre looking for is red.');

      return 'red';
    }
   for (var i = 0; i < greenLine.length; i++)
   {
    if (stop === greenLine[i])
    {
      console.log('The line youre looking for is green.');
      return 'green';
    }
   }
   for (var i = 0; i < orangeLine.length; i++)
   {
    if(stop === orangeLine[i])
    {
      console.log('The line youre looking for is orange.');

      return 'orange';
    }
    else
    {
      console.log("The stop you've requested doesn't exist in our archive.");
      return 'line not found.';
    }
   }
}

var getDifference = function(start, stop)
{
  var difference = 0;
  difference = getIndex(start) - getIndex(stop);
  return difference;
};


var getIndex = function(stop)
{
  var index;
  //loop through the dictionary mbta using 'lines' as our key
  for(var lines in mbta)
  {
    //loop through the arrays that are values within the dictionary
    for(var i = 0; i < mbta[lines].length; i++)
    {
      if(mbta[lines][i] === stop)
      {
        index = mbta[lines].indexOf(stop);
        return index;
      }
    }
  }
  return index;
};
