export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {
        id: (Math.random() * 1000000000000000),
        name: action.name
      }

      return { ...state, bands: [...state.bands, band] }
    
    case 'DELETE_BAND':
      debugger;
      return {bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
