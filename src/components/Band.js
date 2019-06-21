import React, { Component } from 'react';

// must set up Id for bands for  {this.props.band.id} and create bands from the redux store
class Band extends Component {

  render() {
    return(
      <div>
        <li>
          {this.props.band.name} 
          <button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
