import React from 'react';
import Band from './Band';

const Bands = props => {

  const showBands = props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand}/>);

  console.log("in Bands")
  console.log(props.bands)

  return (
    <div>
      {showBands}
    </div>
  )
};

export default Bands;
