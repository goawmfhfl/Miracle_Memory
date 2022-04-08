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
    /* @media(min-width:390px){ */
/*  */
    /* } */

    @media (min-width: 650px) {
    .App {
    width: 640px;
        }
    }

    @media (max-width: 650px) {
    .App {
    width: 100vw;
        }
    }

    #root {
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 9px;
    }

    .App {
    min-height:100vh;
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
