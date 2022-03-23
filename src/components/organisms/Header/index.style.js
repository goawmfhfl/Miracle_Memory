import styled from "styled-components";

export const MainHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  & > div {
    display: flex;
  }
`;

export const HeadLeftBtn = styled.div`
  width: 25%;
  justify-content: flex-start;
`;
export const HeadRightBtn = styled.div`
  width: 25%;
  justify-content: flex-end;
`;

export const HeadText = styled.div`
  width: 50%;
  font-size: 25px;
  justify-content: center;
`;
