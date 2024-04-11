# &#127988; STAY FOLIO 

예약 플랫폼 STAY FOLIO 홈페이지 제작


#### [목차]
###### 1. [STAY FOLIO 바로가기](#-ssg-landers-바로가기)
###### 2. [프로젝트 소개](#-프로젝트-소개)
###### 3. [기술 스택 및 라이브러리](#-기술-스택-및-라이브러리)
###### 4. [개발 기간](#-개발-기간)
###### 5. [주요 기능](#-주요-기능)
###### 6. [느낀점](#-느낀점)

<br>


## &#127988; STAY FOLIO 바로가기

[<img src="./stay_icon.png" width="40" height="40">](https://soyeon1221.github.io/STAY-FOLIO/) 아이콘 클릭!

<br>


## &#127988; 프로젝트 소개

HTML, CSS, JavaScript를 사용하여 만든 스테이폴리오 클론 사이트 입니다.

main, pre-order 페이지를 반응형으로 제작하였습니다. 

<br>


## &#127988; 기술 스택 및 라이브러리

- <img src="https://img.shields.io/badge/JavaScript-ECD53F?style=flat-square&logo=JavaScript&logoColor=white"/>
- <img src="https://img.shields.io/badge/HTML5-F46D01?style=flat-square&logo=HTML5&logoColor=white"/>
- <img src="https://img.shields.io/badge/CSS3-2490D7?style=flat-square&logo=CSS3&logoColor=white"/>

<br>


## &#127988; 개발 기간

- 23.05.07 - 23.05.12 (총 6일)

<br>


## &#127988; 주요 기능

### 1. 상단
<img src="https://github.com/soyeon1221/STAY-FOLIO/assets/121142418/a10f6524-96fe-4d8d-95af-0131fcc3a95b" width="700px" height="348px">

- Header에 flex를 사용하여 상단 메뉴들의 너비를 똑같이 지정하였습니다.
- position을 사용하여 메인이미지 위에 pre-order 이미지가 나타나도록 구현하였습니다.


### 2. 숙소 소개
<img src="https://github.com/soyeon1221/STAY-FOLIO/assets/121142418/90339ea8-b0f9-4767-9732-3007e6f60db5" width="700px" height="348px">

- 3개의 이미지박스만 나타나도록 설정하고 < > 버튼을 클릭하면 숨어있던 이미지박스가 보이도록 구현하였습니다.
- 버튼을 클릭하면 이미지박스의 translateX를 이동해서 슬라이드를 구현하였습니다.
- if else 문으로 함수를 작성해서 이미지박스가 없으면 버튼이 비활성화되도록 구현하였습니다.

### 3. 반응형
<img src="https://github.com/soyeon1221/STAY-FOLIO/assets/121142418/3c412cdc-fb3d-44aa-b160-750de0e30f62" width="700px" height="348px">

- CSS의 미디어 쿼리를 사용하여 다양한 기기에서 최적의 환경으로 사용할 수 있도록 구현했습니다.
- 일정너비에 도달하면 상단에 메뉴가 없어지고 하단에 간단한 메뉴가 나타나도록 구현했습니다.


### 4. pre-order
<img src="https://github.com/soyeon1221/STAY-FOLIO/assets/121142418/3051e518-0213-4e9a-bee2-2f242901e279" width="700px" height="348px">

- pre-order 이미지를 클릭하거나 header의 메뉴를 클릭하면 pre-order 페이지로 이동합니다.
- input의 radio 속성을 사용해서 버튼을 생성하고, CSS에서 checked 가상 클래스를 사용해서 선택된 체크박스의 display를 block으로 변경하였습니다.


### 5. 공개 예정
<img src="https://github.com/soyeon1221/STAY-FOLIO/assets/121142418/eadaae32-e5b5-4cfa-a237-c5c363c0ca72" width="700px" height="348px">

- 이미지 하단에 dots와 해당 이미지의 순서가 같도록 구현하였습니다.
- if else 문으로 함수를 작성해서 첫 번째 사진일 경우 prev버튼이, 마지막 이미지일 경우 next버튼이 비활성화되도록 구현하였습니다.

<br>


## &#127988; 느낀점

처음으로 만들어본 프로젝트라서 부족한 점이 많았다.
숙소 소개 부분도 이미지 하나하나씩 움직이게 하고 싶었으나 성공하지 못해서 3개 이미지가 같이 움직이도록 구현했다.
반응형도 처음 해본 거라 모든 화면에 적합하게 하였는지에 대해서 자신은 없다.
이후에 프로젝트를 하게 되면 지금의 부족함을 극복하고 해결 못한 부분도 꼭 완성하고 싶다.
