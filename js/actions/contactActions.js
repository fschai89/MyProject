import * as types from "./actionTypes";
const data = require("../data.json");

function listContacts(contacts) {
  return {
    type: types.LIST_CONTACTS_SUCCESS,
    contacts,
  };
}

function editContact(contact) {
  return {
    type: types.EDIT_CONTACTS_SUCCESS,
    contact,
  };
}

function addContact(contact) {
  return {
    type: types.ADD_CONTACTS_SUCCESS,
    contact,
  };
}

export function listContactAction() {
  return (dispatch) => {
    dispatch(listContacts(data));
  };
}

export function editContactAction(contact) {
  return (dispatch) => {
    dispatch(editContact(contact));
  };
}

export function addContactAction(contact) {
  return (dispatch) => {
    dispatch(addContact(contact));
  };
}
