function makeCounterFunction(initVal)
{
  var count = initVal;
  function counter(){
    count ++;
    console.log(count);
  }
  return counter;
}
var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

counter1();
counter2();
