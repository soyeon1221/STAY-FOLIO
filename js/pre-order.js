var container = document.getElementById('container');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var prev = document.getElementById('prev');
var prev2 = document.getElementById('prev2');
var prev3 = document.getElementById('prev3');
var next = document.getElementById('next');
var next2 = document.getElementById('next2');
var next3 = document.getElementById('next3');
var dots = document.getElementsByClassName('dot');
var dots2 = document.getElementsByClassName('dot2');
var dots3 = document.getElementsByClassName('dot3');
var imageWidth = 100;
var previousIndex = 0;
var previousIndex2 = 0;
var previousIndex3 = 0;
var thisIndex = 0;
var thisIndex2 = 0;
var thisIndex3 = 0;

function navigateTo(data) {

  thisIndex += data;

  // 컨테이너 이동 (이미지 움직이기)
  container.style.transform = `translateX(-${thisIndex * imageWidth}%)`;

  // 다음 버튼
  if (thisIndex === 8) { // 마지막 이미지 일때
    next.classList.add('hidden');
  } else {
    next.classList.remove('hidden');
  }

  // 이전 버튼
  if (thisIndex === 0) { // 첫번째 이미지에 있는경우
    prev.classList.add('hidden');
  } else {
    prev.classList.remove('hidden');
  }

  // indicator 
  dots[thisIndex].classList.add('active');
  dots[previousIndex].classList.remove('active');

  // 이전 인덱스값 구하기
  previousIndex = thisIndex;
}

function navigateTo2(data2) {

  thisIndex2 += data2;

  // 컨테이너 이동 (이미지 움직이기)
  container2.style.transform = `translateX(-${thisIndex2 * imageWidth}%)`;

  // 다음 버튼
  if (thisIndex2 === 10) { // 마지막 이미지 일때
    next2.classList.add('hidden');
  } else {
    next2.classList.remove('hidden');
  }

  // 이전 버튼
  if (thisIndex2 === 0) { // 첫번째 이미지에 있는경우
    prev2.classList.add('hidden');
  } else {
    prev2.classList.remove('hidden');
  }

  // indicator 
  dots2[thisIndex2].classList.add('active');
  dots2[previousIndex2].classList.remove('active');

  // 이전 인덱스값 구하기
  previousIndex2 = thisIndex2;
}

function navigateTo3(data3) {

  thisIndex3 += data3;

  // 컨테이너 이동 (이미지 움직이기)
  container3.style.transform = `translateX(-${thisIndex3 * imageWidth}%)`;

  // 다음 버튼
  if (thisIndex3 === 9) { // 마지막 이미지 일때
    next3.classList.add('hidden');
  } else {
    next3.classList.remove('hidden');
  }

  // 이전 버튼
  if (thisIndex3 === 0) { // 첫번째 이미지에 있는경우
    prev3.classList.add('hidden');
  } else {
    prev3.classList.remove('hidden');
  }

  // indicator 
  dots3[thisIndex3].classList.add('active');
  dots3[previousIndex3].classList.remove('active');

  // 이전 인덱스값 구하기
  previousIndex3 = thisIndex3;
}