# React Youtube Clone Project

* [1. 유튜브 프로젝트 소개](#list-1)
* [2. 사용한 기술 및 툴](#list-2)
* [3. 프로젝트 구현 내용](#list-3)
* [4. 라이브러리 및 배포](#list-4)
* [5. 진행하며 배운 것들](#list-5)

## 유튜브 프로젝트 소개 <a id="list-1"></a>
- 리액트 함수형 컴포넌트, 리액트 Hooks 이용한 간단한 프로젝트
- 유튜브의 API와 리액트를 사용하여 구현
- Postman으로 API 통신 테스트
- 유튜브 통신 서비스를 분리하여 클래스로 구현하여 컴포넌트에 주입(의존성 주입)
- postCss로 CSS 모듈화
- 유튜브 API Key를 코드상에서 숨김 (.env 파일에 저장)

## 사용한 기술 및 툴 <a id="list-2"></a>
React, Javascript, Node.js, PostCss, axios, Postman, Netlify

## 프로젝트 구현 내용 <a id="list-3"></a>

### 1. API (Youtube 클래스)

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


- Youtube.mostPopular('videos', 'param')
- Youtube.sarch('search', 'param) 
- 서버에 요청url, 요청param 보내서 response를 받아온다.

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
   - Component가 Mount 되었을 때 API를 통해 Most Popular 비디오 데이터를 한번만 가져온다. 
   - react hooks useEffect(() => {}, [])로 구현
 
 ```
 const App = ({youtube}) => {
 ...
 useEffect(() => {
    youtube
      .mostPopular()
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
            

### 진행하며 배운 것들 <a id="list-5"></a>

1. index.js에서 service를 주입하여 app으로 전달하도록 한다. (성능향상)
- (index.js) const youtube = new Youtube(httpClient);
- app 컴포넌트 내부에서 youtube.js를 생성하게 되면 컴포넌트가 리렌더링 될 때 계속 재생성되기 때문에 성능에 좋지 않다.

2. 서비스 기능은 View 따로 분리하여 작성하는게 좋다.
- service/youtube.js 
- Youtube.js 처럼 네트워크 통신을 하는 로직, UI를 중점으로 다루는 View컴포넌트를 분리.

3. dotEnv 파일안에 API Key 숨기기
- 보안을 위해 API Key를 코드상에 노출하지 않고 .env 파일에 작성하여 관리한다. (.gitingnore에 추가)
- 규칙이 있는데, 리액트에서는 REACT_APP_를 반드시 붙여줘야 한다.
- REACT_APP_YOUTUBE_KEY_API = '나의 api key'

4. 프로미스를 리턴하면 함수앞에 async를 붙여주는게 직관적이다.

5. 성능최적화를 위해 (이전과 동일한 state나 props 리렌더링 방지) 클래스는 PureComponent, 함수형은 React.memo(), useCallback()을 사용한다.

6. CSS의 모듈화 - PostCSS
- 모듈별로 스타일링이 가능하다. 
- 편했던 점, 여러 컴포넌트의 버튼에 btn, 타이틀에 title이라는 className을 지정해도 (각 컴포넌트에 연결된 styles가 있기 때문에) 스타일이 중복되지 않고 작업하기가 편했다.


## 라이브러리 및 배포 <a id="list-4"></a>

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

2. axios 

3. 배포: Netlify

https://61517ed6f581d86b29e68b0f--mk-react-youtube.netlify.app