import { connect } from "react-redux";
import JobNumberSeq from "../components/JobNumberSeq";
import { createAddress } from "../actions";

function mapStateToProps(state) {
  return {
    clients: state.clients,
    cities: state.cities,
    subdivisions: state.subdivisions,
    jobnumberseqs: state.jobnumberseqs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createAddress: (address)=> {
      dispatch(createAddress(address));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobNumberSeq);
