import "./font.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
    min-height: 100vh;
    margin: 0;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Amsterdam";
    }
/* 하얀 도화지 #root는 말그대로 도화지 역활을 한다. */
    #root {
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 9px;
    }

/* App은 전체적인 width와 heigh 값을 관장한다. */
    .App {
    position:relative;
    min-height:100vh;
    padding-left: 20px;
    padding-right: 20px;
    padding-top:90px;
    padding-bottom:85px;
    }
/* 650px 이상이 되어버리면 크기를 650px로 정하겠다. */
    @media (min-width: 650px) {
    .App {
    width: 640px;
        }
    }
/* 650px 이하가 될 경우 크기를 100vw로 정하겠다. */
    @media (max-width: 650px) {
    .App {
    width: 100vw;
        }
    }
/* 360px ~ 650px 까지의 레이아웃을 관장한다.*/
    * {
        box-sizing:border-box;
    }

    a {
        text-decoration:none;
        cursor: pointer;
        color:inherit;
    }

    button {
        border: none;
        cursor: pointer;
        padding: 0;
        background-color: inherit;
    }
    input {
        &:focus {
        outline:none;
      }
    }
    textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; 
    }
    .nowrap{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
  
`;
export default GlobalStyles;
