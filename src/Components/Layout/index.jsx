import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CartDrawer from "../CartDrawer";
import MessengerCustomerChat from "react-messenger-customer-chat";

import { Col, Container, Jumbotron, Row } from "react-bootstrap";
// import MenuHeader from '../MenuHeader';

const Layout = (props) => {
  return (
    <>
      <Header />
      {/*<MenuHeader /> */}
      {props.children}

      

      <Footer />
      {/* <CartDrawer /> */}
    </>
  );
};

export default Layout;
