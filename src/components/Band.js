import React, { Component } from 'react';

class Band extends Component {

  render() {
    let bandRender = this.props.band.map(band => {
      console.log(band)
      return (
        <React.Fragment key={band.id}>
          <li>{band.name}</li><button onClick={() => this.props.deleteBand(band.id)}>DELETE</button>
        </React.Fragment>
      )
    })
    
    return(
      <div>
        {bandRender}
      </div>
    );
  }
};

export default Band;
