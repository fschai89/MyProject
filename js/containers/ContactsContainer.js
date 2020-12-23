import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Contacts from "../components/Contacts";
import {
  listContactAction,
  editContactAction,
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
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
