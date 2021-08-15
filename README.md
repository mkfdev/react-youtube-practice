# React Youtube Clone Project

* [1. 프로젝트 목적](#list-1)
* [2. 사용한 기술 및 툴](#list-2)
* [3. 프로젝트 구현 내용](#list-3)
* [4. 추가한 내용](#list-4)
* [5. 배운 내용들](#list-5)

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

| url   | 목적  |
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

![image](https://user-images.githubusercontent.com/32028959/129478879-39db9025-36a9-4f07-a0eb-70fca1e48081.png)

- 주요 기능

1. Most Popular 동영상 25개 보여주기
   - Component가 Mount 되었을 때 API를 통해 Most Popular 비디오 데이터를 가져온다. 
   - react hooks useEffect(() => {}, [])로 구현
 
 ```
 const App = ({youtube}) => {
 ...
 useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);
  ...
  }
  ```
  
2. 검색 동영상 25개 보여주기  
    - ViedoHeader 컴포넌트에 onSearch props를 전달해서 input의 value(검색키워드)를 가져온다.
    - input의 value값을 query로 전달하여 해당하는 비디오 데이터를 가져온다.
    - videos state를 해당 비디오 목록으로 update 해준다.

```
const searchVideo = query => (
  setSelectedVideo(null);
  youtube 
    .search(query)
    .then(videos => {
      setVideos(videos);
    });
);
  
return (
  <VideoHeader onSearch={searchVideo}/>
  ...
);

```

3. 선택한 영상 보여주기(Detail View)
    - ViedoList컴포넌트에 handleSelectVideo props 전달하여 video 선택 시(클릭 이벤트가 일어날 때) 해당하는 video를 전달한다.
    - 해당하는 video를 selectedVideo state에 업데이트하고, selectedVideo 값이 있으면 Detail View를 보여준다.

```
const [selectedVideo, setSelectedVideo] = useState(null);
const handleSelectVideo = video => {
  setSelectedVideo(video);
};
  
return(
  {
    selectedVideo && <VideoDetailView video={selectedVideo}/>
  }
  ...
  <VideoList handleSelectVideo={handleSelectVideo}/>
  ...
);
            
```


## 추가한 내용 <a id="list-4"></a>

1. JSON문자 코드 변환하기 : *unescape library 사용*

``` yarn add --save unescape ```

```
import decode from "unescape";
const decodeChar = title => {
  return decode(title);
};
```
=> decodeChar를 정의하여 title, channelTitle의 entities code를 문자코드로 변환했다.

![image](https://user-images.githubusercontent.com/32028959/129480879-2d741691-8d0c-4d60-b6c5-d677a8abc486.png)

![image](https://user-images.githubusercontent.com/32028959/129480881-76eaa658-4c12-4b63-83b7-b868152784ae.png)


## 배운 내용 <a id="list-5"></a>

