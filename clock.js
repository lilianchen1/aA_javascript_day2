var startTime = new Date();

function Clock (startTime) {
  this.startTime = startTime;
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  console.log(clock.hours + ":" + clock.minutes + ":" + clock.seconds);
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.

  this.hours = startTime.getHours();
  this.minutes = startTime.getMinutes();
  this.seconds = startTime.getSeconds();
  this.printTime();
  setInterval(clock._tick.bind(clock), 5000);
// set interval is called every 5 seconds;


};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  clock.seconds += 5;
  if (clock.seconds > 60) {
    clock.seconds -= 60;
    clock.minutes += 1;
  }

  if (clock.minutes > 60 ) {
    clock.minutes -= 60;
    clock.hours += 1;
  }

  if (clock.hours > 24) {
    clock.hours = 0;
  }

  clock.printTime()
};

var clock = new Clock();
clock.run();
