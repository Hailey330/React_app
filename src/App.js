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
function getPosts() {
  // id, title, content 가지는 컬렉션 만들기
  let posts = [];
  for (let i = 1; i < 6; i++)
    posts[i] = {
      id: i,
      title: `제목 ${i}`,
      content: '내용 ' + i,
    };
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
