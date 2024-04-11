var container = document.getElementById('container');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var number = document.getElementById('number');
var imageWidth = 432;
var previousIndex = 0;
var thisIndex = 0;

function navigateTo(data) {
  thisIndex += data;

  // 컨테이너 이동 (이미지 움직이기)
  container.style.transform = `translateX(-${thisIndex * imageWidth}px)`;

  // 이전 인덱스값 구하기
  previousIndex = thisIndex;
}