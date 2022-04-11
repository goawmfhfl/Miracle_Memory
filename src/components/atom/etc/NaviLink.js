import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NaviLink = styled(NavLink)`
  display: block;
  font-size: 18px;
  color: ${(props) => props.theme.palette["subText"]};
  padding: 12px 0 6px;
  text-align: center;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 28px;
    height: 28px;
    margin-bottom: 6px;
    background: no-repeat center / contain;
  }
&.home::before {
      background-image: url("/assets/icon/nav-home.svg")
  }
&.upload::before {
    background-image: url("/assets/icon/nav-edit.svg")
    }
&.information::before {
    background-image: url("/assets/icon/nav-message-circle.svg")
    }
  }

  &.active {
    &.home::before {
        background-image: url("/assets/icon/nav-home-fill.svg")
    }
    &.information::before {
        background-image: url("/assets/icon/nav-message-circle-fill.svg")
    }
    
`;

export default NaviLink;
