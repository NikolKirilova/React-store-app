import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import { useProductsContext } from "../../context/products_context";
 
import MenuItems from "./MenuItems";
import CartButtons from "../cart/CartButtons";
// import { useUserContext } from '../context/user_context'

const Nav = () => {
  const { openSidebar } = useProductsContext();
 
 
  
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link, index) => {
            // const {id,text,url,submenu} = link
            return (
              <MenuItems items={link} key={index} />
              // <li key={id}>
              //   <Link to={url}>{text}</Link>
              // </li>
            );
          })}
        </ul>
        {/* <ul className="nav-links">
          {categories.map((category) => {
              const {id,name} = category;
              console.log(category.id)
            return (
              <button key={id} >{name}</button>
            )
          })}
        </ul> */}
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;

  .dropdown {
    display: none;
  }

  .dropdown.show {
    display: block;
    position: absolute;
    top: 65px;
    .submenu-items {
      padding: 4px 0;
      background-color: #685353;
    }
  }

  .menu-items {
    padding: 20px 0;
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 135px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
 
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      position: relative;
    }
    .nav-links<li {
      margin: 0 0.5rem;
    }
    .menu-items > a {
      color: #fff;
      font-size: 16px;
      text-transform: capitalize;
      font-weight: 600;
      padding: 20px 10px;
    }
   

    // .menu-items > a:hover {
    //   border-bottom: 2px solid var(--clr-primary-7);
    // }

    .submenu-items > a {
      color: #fff;
      font-size: 16px;
      text-transform: capitalize;
      font-weight: 600;
      padding: 20px 10px;
    }

    .cart-btn-wrapper {
      display: flex;
    }
  }
`;

export default Nav;
