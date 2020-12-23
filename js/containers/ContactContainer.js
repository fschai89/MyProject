import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Contact from "../components/Contact";
import {
  listContactAction,
  editContactAction,
  addContactAction,
} from "../actions/contactActions";

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      listContactAction,
      editContactAction,
      addContactAction,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
