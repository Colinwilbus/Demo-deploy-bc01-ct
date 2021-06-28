import React, { Component } from "react";
import ProducItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <ProducItem />
            <ProducItem />
            <ProducItem />
            <ProducItem />
          </div>
        </section>
      </div>
    );
  }
}
