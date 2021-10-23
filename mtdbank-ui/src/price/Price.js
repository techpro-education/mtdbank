import React from "react";
import { Link } from "react-router-dom";
import "./Price.css";
const Price = () => {
  return (
    <div id="package" className="pricing_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <div className="section-title">
              <h6 className="subtitle subtitle-thumb">Our Packages</h6>
              <h2 className="title">Grab Our Packages</h2>
              <p>
                The right banking package for you . Get the privilege of
                choosing between our many Banking Packages, and enjoy services
                that will reward you and fit your lifestyle.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="single-price text-center">
              <div className="pricing-details">
                <h2 className="pricing-cost">5.50%</h2>
                <h6 className="pricing-subtitle">For a month</h6>
                <h4 className="pricing-title">Basic</h4>
              </div>
              <ul className="pricing-list">
                <li>Minimum Deposit $1000</li>
                <li>Maximum Deposit $10000 per day</li>
                <li>Add upto 5 Users</li>
                <li>Free Internet Banking</li>
                <li>
                  <Link className="btn btn-blue">Buy Now</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="single-price text-center">
              <div className="pricing-details">
                <h2 className="pricing-cost">7.50%</h2>
                <h6 className="pricing-subtitle">For a month</h6>
                <h4 className="pricing-title">Premium</h4>
              </div>
              <ul className="pricing-list">
                <li>Minimum Deposit $500</li>
                <li>Maximum Deposit $50000 per day</li>
                <li>Add upto 10 Users</li>
                <li>Free Internet Banking</li>
                <li>
                  <Link className="btn btn-blue">Buy Now</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="single-price text-center">
              <div className="pricing-details">
                <h2 className="pricing-cost">9.50%</h2>
                <h6 className="pricing-subtitle">For a month</h6>
                <h4 className="pricing-title">Advanced Plan</h4>
              </div>
              <ul className="pricing-list">
                <li>No Minimum Deposit</li>
                <li>Maximum Deposit $100000 per day</li>
                <li>Unlimted Users</li>
                <li>Free Internet & Mobile Banking</li>
                <li>
                  <Link className="btn btn-blue">Buy Now</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
