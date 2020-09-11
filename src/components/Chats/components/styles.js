import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  border-bottom: 1px solid #fafafa;

  .chat_image{
    margin-right: 20px;
  }

  .chat_details{
    flex: 1;
  }

  .chat_details > p {
    color: gray;
  }

  .chat_timestamp {
    color: lightgray;
  }
`;