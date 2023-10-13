import React from "react";
import { Link } from "react-router-dom";
export default function Transection(props) {
  let array = [
    "Person1",
    "Person2",
    "Person3",
    "Person4",
    "Person5",
    "Person6",
    "Person7",
    "Person8",
    "Person9",
    "Person10",
  ];
  var x = 0;
  return (
    <div className="container" style={{marginTop:'5px'}}>
      {array.map((element) => {
        x = x + 1;
        return (
          <div className="card mb-3 " key={`person${x}`}>
            <div className="card-body">
              <div></div>
              <span className="card-text">
                <div className="d-flex flex-wrap justify-content-between">
                  <div style={{margin:'10px'}} id={`person${x}`} key={`person${x}`}>
                    <i className="fa-regular fa-user"></i> {element}{" "}
                  </div>
                  <div style={{margin:'10px'}} >person{x}@gmail.com </div>
                  <div style={{margin:'10px'}}> {props.persons.get(element)} </div>
                  <div style={{margin:'10px'}}>
                    <Link
                      to="/make_payment"
                      className="btn btn-outline-primary"
                    >
                      Pay Money
                    </Link>
                  </div>
                </div>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
