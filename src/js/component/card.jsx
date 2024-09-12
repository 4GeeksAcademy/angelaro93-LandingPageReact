import React from "react";

const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.643-DaTIL7rvnkBPbJoJogHaFH&pid=Api&P=0&h=180"
              className="card-img-top"
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                eligendi ad id non at architecto labore magnam incidunt iure,
                eos deleniti quisquam magni quos voluptatem aut molestias enim
                aspernatur ratione.
              </p>
              <a href="#" className="btn btn-primary">
                Find out more!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
