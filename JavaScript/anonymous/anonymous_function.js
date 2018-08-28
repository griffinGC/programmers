var sum = 0;
for(var i = 0; i<=50; i++){
  sum += i;
}

(function(){ //익명함수기 때문에 이름을 생략하고 사용함. 여기서만 사용하기 때문에 이름을 굳이 적을 필요 없음
  for(var i =0; i<=5; i++){
    console.log(i);
  }
})();
for(; i<=100; i++){
  sum += i;
}
console.log(sum);
