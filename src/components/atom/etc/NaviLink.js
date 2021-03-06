import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NaviLink = styled(NavLink)`
  display: block;
  font-family: "MaruBuri";
  font-size: 12px;
  padding: 12px 0 6px;
  text-align: center;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
    background: no-repeat center / contain;
  }
&.home::before {
      background-image: url("/assets/icon/nav-home.svg")
  }
&.upload::before {
    background-image: url("/assets/icon/nav-edit.svg")
    }
&.todo::before {
    background-image: url("/assets/icon/nav-check.svg")
    }
  }

  &.active {
    color:${(props) => props.theme.palette["main"]};
    &.home::before {
        background-image: url("/assets/icon/nav-home-fill.svg");
    }
    &.upload::before {
        background-image: url("/assets/icon/nav-edit-fill.svg")
    }
    &.todo::before {
        background-image: url("/assets/icon/nav-check-fill.svg")
    }
    
`;
export default NaviLink;
