import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import ProducList from "./ProductList";
class ExampleDivComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <ProducList />
        <Footer />
      </div>
    );
  }
}
export default ExampleDivComponent;
