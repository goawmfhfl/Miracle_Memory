import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-family: "Nanum Pen Script", cursive; */
    min-height: 100vh;
    margin: 0;
    }

    /* 650 ~ 이상일 경우에는 min*/
    /* ~ 650 이하일 경우에는 max*/
    @media (min-width: 650px) {
    .App {
    width: 640px;
        }
    }
    @media (max-width: 650px) {
    .App {
    width: 90vw;
        }
    }

    #root {
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 9px;
    }

    .App {
    min-height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
    }
    a {
        text-decoration:none;
        cursor: pointer;
        color:inherit;
    }
    * {
        box-sizing:border-box;
    }
 
    img {
        width: 100%;
        height: 100%;
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

    resize: none; /*remove the resize handle on the bottom right*/
    }
    .ir {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
    
    .a11y-hidden{
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        clip-path: polygon(0 0, 0 0, 0, 0);
    }
`;
export default GlobalStyles;
