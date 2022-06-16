$(function(){
  $(".roseImg > li").mousemove(function(e){
    var posX = e.offsetX; 
    var posY = e.offsetY;
    //li요소를 기준으로 x축과 y축 마우스위치값을 구하여 변수에 할당

    var i = $(this).index();//마우스무브 이벤트가 적용된 li요소의 순번을 i에 할당

    $(".zoom > div").eq(i).children("img").css({"display":"block",transform:`translate(${-(posX*2)+35}px,${-(posY*2)+35}px)`})
  })

  //수량추가
  var num = $(".num").attr("value");
  $(".arrowBtn > .up").click(function(){
    num++;
    if(num > 100){num = 100}
    $(".num").attr("value",num);
  });
  //수량감소
  $(".arrowBtn > .down").click(function(){
    num--;
    if(num <= 0){num = 0}
    $(".num").attr("value",num);
  });

  //pairing 드래그
  //#bar를 x축으로만 드래그 할 수 있도록 한다. 그 범위는 #bar의 부모크기 만큼만 가능
 

  $(".perfumeDrag").on("mousewheel",function(e){
    e.preventDefault();//window의 마우스휠이벤트를 제거
    var delta = e.originalEvent.deltaY //휠을 위로 올리면 -100반환, 밑으로 내리면 100을 반환
    var drag = document.querySelector(".perfumeDrag");
    var pos = drag.scrollLeft //.perfumeDrag요소의 스크롤 위치값을 구함
    if(delta > 0){//휠을 밑으로 내렸을 경우
      pos += 40; 
      drag.scrollLeft = pos//drag요소의 스크롤을 40px만큼 이동시키는 코드
    }else{//휠을 위로 올렸을 경우
      pos -= 40
      drag.scrollLeft = pos//drag요소의 스크롤을 -40px만큼 이동시키는 코드
    }
  })

  /*
    비례식
    pos를 좌변에 두고 나머지를 모두 우변에 두는 과정
    (570-0):(barLeft-0) = (max-min):(pos-min)
    barLeft*(max-min) = 570*(pos-min)
    (barLeft*(max-min))/570+min
  */
});