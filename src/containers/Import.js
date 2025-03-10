import React from 'react'
import { connect } from 'react-redux';
import Import from '../components/Import';
import { deleteMakes, fetchMakes } from '../redux/actions.js';


  const mapStateToProps = (state) => {
    return {
      makes: state.makes
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchMakes: () => dispatch(fetchMakes()),
      deleteMake: (index) => dispatch(deleteMakes(index))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Import)