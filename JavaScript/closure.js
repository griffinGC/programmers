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
//클로저는 함수랑 함수환경을 같이 두는것을 클로저라고 부른다.
// 클로저는 내부함수가 외부함수에 접근하는것을 뜻한다.
// 외부함수가 인자로 받은것을 내부함수를 처리해서 반환한다.
