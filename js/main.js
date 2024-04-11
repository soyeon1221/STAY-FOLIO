var container = document.getElementById('container');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var number = document.getElementById('number');
var imageWidth = 1296;
var previousIndex = 0;
var thisIndex = 0;
var totalImages = document.querySelectorAll('.main2-box').length - 6;

function updateIndicator(index) {
  // 현재 인덱스를 기준으로 숫자 업데이트
  number.textContent = index + 1;
}

function navigateTo(data) {
  thisIndex += data;

  // 다음 인덱스값이 이미지의 총 개수를 넘지 않는지 확인
  if (thisIndex < totalImages && thisIndex >= 0) {
    // 컨테이너 이동 (이미지 움직이기)
    container.style.transform = `translateX(-${thisIndex * imageWidth}px)`;

    // 이전 인덱스값 구하기
    previousIndex = thisIndex;

    // 다음 버튼 비활성화 처리
    if (thisIndex === totalImages - 1) {
      next.disabled = true;
    } else {
      next.disabled = false;
    }

    // 이전 버튼 비활성화 처리
    if (thisIndex === 0) {
      prev.disabled = true;
    } else {
      prev.disabled = false;
    }

    // 인디케이터 업데이트
    updateIndicator(thisIndex);
  } 
}

// 페이지 로드 시 초기 버튼 상태와 인덱스를 설정. 초기 인덱스에 따라 숫자 엘리먼트를 업데이트
// 페이지 로드 시 초기 버튼 상태 설정
if (thisIndex === 0) {
  prev.disabled = true;
}

if (totalImages <= 1) {
  next.disabled = true;
}

// 초기 인디케이터 설정
updateIndicator(thisIndex);