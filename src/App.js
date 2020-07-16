import React, { Component } from 'react';
import styled from 'styled-components';
import Post from './Post';

const ContainerBox = styled.div`
  display: grid;
  width: 900px;
  border: 1px solid purple;
  text-align: center;
  /* text-align은 inline 속성을 가지고 있어야 먹힘 */
  margin: 10px auto;
`;

// API 호출 함수
// 비동기 함수 await 는 async 와 같이 써야함
async function getPosts() {
  let response = await fetch('http://localhost:8080/post');
  let posts = await response.json();
  console.log(posts);
  return posts;
}

class App extends Component {
  render() {
    return (
      <ContainerBox>
        {/* 리턴 시 중괄호 안에 function 넘김 */}
        {getPosts().map(
          /* getPosts 컬렉션의 사이즈만큼 map 내부가 호출됨 */
          (post) => (
            <Post id={post.id} title={post.title} content={post.content} />
          )
        )}
      </ContainerBox>
    );
  }
}

export default App;
