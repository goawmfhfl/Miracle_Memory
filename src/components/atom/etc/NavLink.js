import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link).attrs`
  display: block;
  font-size: 10px;
  color: ${(props) => props.theme.palette["subText"]};
  padding: 12px 0 6px;
  text-align: center;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 24px;
    height: 24px;
    margin-bottom: 6px;
    background: no-repeat center / contain;
  }
  &.home::before {
  }
  &.information::before {
  }
  &.upload::before {
  }
  &.myprofile::before {
  }

  &.active {
    &.home::before {
    }
    &.information::before {
    }
    &.myprofile::before {
    }
  }
`;

export default NavLink;
