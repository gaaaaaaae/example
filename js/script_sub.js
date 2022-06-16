$(function(){
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
  });

  //window객체에 스크롤이벤트 발생시
  $(window).scroll(function(){//window객체에 스크롤 이벤트 발생
    var scroll = $(window).scrollTop();//변수 scroll에 현재 스크롤한 만큼의 거리를 저장
    console.log(scroll);
    if(scroll > 20){//스크롤이동값이 20보다 클때 구문실행
      $(".topbtn").css("display","block");
    }else{//스크롤이동값이 20보다 작을때 구문실행
      $(".topbtn").css("display","none");//버튼요소를 화면에서 제거
    }
  });

  //top버튼 클릭시
  $(".topbtn").click(function(){
    $(window).scrollTop(0);//window객체의 스크롤위치값을 0(페이지상단)으로 설정
  })
});