import React from 'react';
import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    return (
      <div className="Goat col-3">
        <div class="card">
        <img src={goat.imgUrl} class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">{goat.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button href="#" class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
