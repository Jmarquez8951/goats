import React from 'react';
import './Goat.scss';

class Goat extends React.Component {

  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="Goat col-3">
        <div className="card">
          <img src={goat.imgUrl} className="card-img-top" alt="Goat Card" />
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">Beard Length: {goat.beardLength}</p>
            <div className="card-footer">
              <button className="btn btn-dark" onClick={this.useGoatEvent}>Use Goat</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
