import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    useAGoat: PropTypes.func.isRequired,
    freeAGoat: PropTypes.func.isRequired,
    goat: goatShape.goatShape,
  }

  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
  }

  freeGoatEvent = (e) => {
    const { goat, freeAGoat } = this.props;
    e.preventDefault();
    freeAGoat(goat.id);
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
              {
                goat.isBusy ? (
                  <button className="btn btn-danger" onClick={this.freeGoatEvent}>Free the Goat</button>
                ) : (
                  <button className="btn btn-dark" onClick={this.useGoatEvent}>Use Goat</button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
