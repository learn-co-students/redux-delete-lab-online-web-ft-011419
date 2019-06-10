import React from 'react';
import Band from './Band';

const Bands = props => {

  var bands = props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand}/>);

  return (
    <div>
      {bands}
    </div>
  )
};

export default Bands;
