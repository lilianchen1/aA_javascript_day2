Function.prototype.myBind = function(context) {
  var fn = this;
  return function() {
    fn.apply(context);
  };
};


function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.ageOneYear = function(){
    this.age += 1;
  };
}

var cat1 = new Cat("Felix", 3);

function times(num, fun) {
  for (var i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

console.log(typeof cat1);
console.log(times(10, cat1.ageOneYear.myBind(cat1)));
console.log(cat1.age);

// fn = this, this is the function ageOneYear because myBind is called on ageOneYear
// fun() is referring to the whole anonymous function being returned in myBind(context)
// context is cat1 object
