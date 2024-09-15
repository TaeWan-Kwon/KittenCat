# CatStone

<h3>코드 패키지명별로(src패키지 하위항목) 간단 설명</br></h3>
주요 패키지 : main</br>
테스트 패키지 : test
- 기능 실행을 확인해볼 수 있는 테스트 코드들이 존재

<h1>다음은 main패키지 하위항목에 대한 설명</h1>
<h2>resources : 프론트엔드 관련 패키지</h2>
<h3>static : HTML파일을 구성하는 파일들을 담은 패키지</h3>

- assets : 이미지 파일
- css : 스타일
- js : 다양한 작동을 발생시키는 파일

<h3>templates : HTML들을 담은 패키지</h3>
- layout : 상단, 하단 및 사이드바를 디자인하는 HTML
- member : 회원가입, 로그인와 같은 회원관련 HTML
- board : 리뷰 관련 HTML
- place : 장소 관련 HTML
- main : 메인 HTML

<h2>java.org.zerock.b01 : 백엔드 관련 패키지</h2>
- config : 기본 구성 파일
- controller : 작동을 발생시키는 파일, 주로 HTML를 불러오거나 HTML로부터 데이터를 받거나 HTML로 데이터를 보내는 역할을 한다.
- domain : 데이터의 형식을 지정한다.
- dto : 데이터베이스와 object 간의 데이터를 전송하기 위해 존재한다.(data transmit object)</br>
  - object 혹은 데이터베이스 사이에서 데이터가 전송될 때 어떠한 타입의 특정한 이름을 가진 데이터가 전송될지 지정해주며 전송될 데이터를 원하는대로 구성하여 전송할 수 있다.
- repository : 저장소라는 이름을 가진 이 패키지는 이름 그대로 DML(Data Manipulation Language, 데이터 조작어)를 사용하여 저장소인 데이터베이스에서 데이터를 CRUD(create(만들기), read(읽기) update(수정), delete(삭제))를 한다.
- security : 카카오톡 로그인 관련 패키지다
- service : DTO로 데이터를 입력받고 repository에 정의되어있는 다양한 메서드를 사용하여 DML를 실행시키거나 DML를 실행시키고나서 데이터를 반환한다.
  - 뒤에 impl가 안 적힌 파일 : 메서드가 추상화되어있는 인터페이스
  - 뒤에 impl가 적힌 파일 : 메서드를 구현한 파일

<h3>백엔드 간단 요약</br></br></h3>
<h4>
매장으로 비유한 기본 흐름은 대략 이렇다.
1. 사장은 'config으로 매장의 기본 세팅'을 해준다.
2. 그럼 손님은 '메뉴판(HTML)을' 보면서 '주문(controller)'를 통해 서비스를 요청한다.**
3. 그럼 알바는 서비스(service)를 제공하고자 사장에게 요청을 한다.
4. 그럼 주방 혹은 작업실에 있던 사장은 창고(database)에서 '정해진 규칙이나 절차(domain)'를 따라서 '필요한 재료나 물건(dto)'을 '꺼낸다.(repository)'
5. 그럼 사장은 재료를 가지고서는 무언가를 만든다.(service) 그리고 알바는 사장으로부터 무언가를 받고 손님에게 해당 서비스(service)를 제공한다.
</h4>
