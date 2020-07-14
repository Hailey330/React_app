import React from 'react';
import styled, { css } from 'styled-components';

const PostBox = styled.div`
  border: 1px solid black;
  height: 80px;
  text-align: center;
`;

// props → Object로 받음. 모델을 만들지 않아도 바로 받음.
function Post(props) {
  const { id, title, content } = props; // 구조 분할 할당
  return (
    <PostBox>
      <div>번호 : {id}</div>
      <div>제목 : {title}</div>
      <div>내용 : {content}</div>
    </PostBox>
  );
}

// export - 누군가 파일을 import 할 때 배포하고 싶은 파일이나 변수를 적으면 됨
export default Post;
