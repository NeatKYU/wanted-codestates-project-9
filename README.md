# 깃허브 레포지토리, 이슈 검색 사이트 (페이히어)

### 사이트 간단 설명
깃허브 open api를 사용하여 레포지토리 검색 기능 및 이슈 목록 확인 사이트를 만들었습니다.
이슈 목록을 볼 수 있는 레포지토리는 최대 4개이며 각각의 레포지토리마다 이슈 목록을 확인 가능합니다.

### 요구사항
1. 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다. (o)
2. 검색된 Public Repository를 등록할 수 있다.
    - 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다. (o)
    - 웹은 LocalStorage, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택) (o)
3. 등록된 Repository를 삭제할 수 있다. (o)
4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
    - 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다. (o)
    - 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다. (o)
    - 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다. (o)
    
**추가 설명**
- 세션 스토리지에 등록된 레포지토리 리스트를 저장하고 관리합니다.
- 사용자에게 알림은 **자체 제작**한 토스트 메시지를 이용하였습니다.
- 검색시 디바운스를 이용하여 여러번의 요청을 피하였습니다.
- 목록에 보여지는 레포지토리와 이슈는 같은 컴포넌트를 사용하여 코드 재사용성을 극대화 하였습니다.
- 이슈 상세페이지는 목록의 이동 버튼을 클릭하면 이동합니다.

### 사용 스택
- React
- Recoil
- SWR
- typescript
- styled-components

### 배포 링크
https://wanted-codestates-project-9-two.vercel.app

### 자세한 실행 방법
환경변수는 REACT_APP_BASE_URL, REACT_APP_GIT_TOKEN이 있으며 각각 open api url과 깃에서 발급받은 토큰을 넣으시면 됩니다.
```
git clone https://github.com/NeatKYU/wanted-codestates-project-9
npm install
npm start
```

### 어려웠던 점
- 최대한 라이브러리를 사용하지 않으려 하였습니다. 그러다보니 잘 안되는게 많았던 것 같습니다. 토스트 메시지 같은 경우엔 예전에 만든거지만 그땐 리덕스 툴킷을 사용하여 만든 거라 이번에는 리코일을 사용하여 프로젝트를 꾸렸기 때문에 다시 바꿔줘야 할 필요가 있었습니다. 그리고 페이지네이션 같은 경우엔 api에서 totalcount, page, perpage를 모두 제공해 주었기 때문에 스스로 만들어보자 도전하였습니다. 하지만 뜻대로 움직이지 않았고 로직이 생각보다 복잡해져서 코드가 길어지고 잦은 문제점이 발견되어 시간이 많이 허비된게 아쉽고 어려웠습니다. 현재는 다 고쳐서 동작을 잘합니다. 로직을 수정하고 계속 테스트하면서 고쳐나갔습니다. 결국엔 해냈다는것이 참으로 뿌듯합니다.

### 주요화면

- 레포지토리 검색 페이지
<img width="1425" alt="스크린샷 2022-03-25 오후 2 14 43" src="https://user-images.githubusercontent.com/22316798/160058873-76ff417b-0e98-4a51-8c9b-05c15320c972.png">

- 이슈 목록 페이지
<img width="1425" alt="스크린샷 2022-03-25 오후 2 15 14" src="https://user-images.githubusercontent.com/22316798/160058922-0794a5ee-8158-4e69-93dc-52b92038c9fb.png">

- 알림 메시지
![토스트](https://user-images.githubusercontent.com/22316798/160059267-0ff6cfbc-1cb0-49f3-bcf1-bf84d41b2517.gif)
