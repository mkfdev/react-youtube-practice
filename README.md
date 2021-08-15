# React Youtube Clone Project

* [1. 프로젝트 목적](#list-1)
* [2. 사용한 기술 및 툴](#list-2)
* [3. 프로젝트 구현 내용](#list-3)
* [4. 추가로 수정한 것](#list-4)
* [5. 배운 것](#list-5)

## 프로젝트 목적 <a id="list-1"></a>
- 실습을 통한 리액트 이해
- API 학습과 활용
- 다음 프로젝트를 진행하기 위해 기본 다지기

## 사용한 기술 및 툴 <a id="list-2"></a>
React, Javascript, PostCss, axios, Postman

## 프로젝트 구현 내용 <a id="list-3"></a>

### 1. API

baseurl: https://youtube.googleapis.com/youtube/v3

- GET

| url   | 기능  |
| :----: | :----: |
| /videos | 인기 영상 |
| /search  | 검색 영상 |


- query
  - part: snippet
  - maxResult: 25
  - type: video
  - chart: mostPopular
  - q: ${query}
  - key: private

### 2. React

- React Hooks 사용

- state
  - videos: youtube 동영상 요청 후 받아온 데이터를 업데이트
  - selectedVideos: 동영상 선택 후 선택된 video를 저장하는 state

- 컴포넌트 구성
  - VideoHeader
  - VideoList
  - VideoItem
  - VideoDetailView
  
![image](https://user-images.githubusercontent.com/32028959/129474189-b33752d2-69e0-4d44-a3cf-ff709b53196f.png)

![image](https://user-images.githubusercontent.com/32028959/129474262-718f1a71-1002-449e-9839-9f2cdbed7bc8.png)


## 추가로 수정한 것 <a id="list-4"></a>

## 배운 것 <a id="list-5"></a>
