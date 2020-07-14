// 메인 파일은 클래스형 Components로 만든다.
// 나머지 파일들은 function Components

import React, { Component } from 'react';

class App extends Component {
  // state - component가 갖고있는 값
  // 키워드
  state = {
    name: '홍길동',
    nickName: '야식왕',
  };

  // render : 그림을 그려주는 함수
  render() {
    // 그림 그릴 때마다 호출되는데 연산이 많아져서 좋지 않으므로 const로 메모리에 바로 띄움
    const btnClick = () => {
      // this.state.nickName = '홈런왕';
      this.setState({
        // Object 담을 수 있음. setState 할 때만 다시 그려짐.
        nickName: '홈런왕',
      });
      console.log(this.state.nickName);
      // console창에는 바뀐 값이 뜨지만 동기화가 되지 않는다. 즉, 그림이 다시 그려지지 않는다.
      // render()가 다시 호출되어야 그림이 그려진다.
      // render()를 호출할 수 있는 유일한 방법
    };

    // let name = '홍길동';
    // let nickName = '야식왕';

    return (
      <div>
        <div>나의 이름은 {this.state.name}입니다.</div>
        <div>나의 별명은 {this.state.nickName}입니다.</div>
        <button onClick={btnClick}>닉네임 변경</button>
      </div>
    );
  }
}

export default App;
