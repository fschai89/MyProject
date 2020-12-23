import * as types from "../actions/actionTypes";

const initialState = {
  contacts: [],
  loading: false,
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case types.LIST_CONTACTS_SUCCESS:
      return Object.assign({}, state, {
        contacts: action.contacts,
        loading: false,
      });
      break;

    case types.EDIT_CONTACTS_SUCCESS:
      return Object.assign({}, state, {
        contacts: state.contacts.map((contact) =>
          contact.id === action.contact.id ? action.contact : contact
        ),
        loading: false,
      });
      break;

    case types.ADD_CONTACTS_SUCCESS:
      return Object.assign({}, state, {
        contacts: state.contacts.concat([action.contact]),
        loading: false,
      });
      break;

    default:
      return state;
  }
}

export default contactReducer;
