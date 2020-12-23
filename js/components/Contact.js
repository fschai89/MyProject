import React, { Component } from "react";
import {
  BackHandler,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Keyboard,
  Platform,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import styles from "../styles/contact";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
  }

  componentDidMount() {
    let { contact, mode } = this.props.route.params;

    if (mode == "edit") {
      this.setState({
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      });
    }

    this.props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={this.onPressCancel}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={this.onPressSave}>
          <Text style={styles.headerText}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }

  onPressSave = () => {
    let { mode } = this.props.route.params;

    if (mode == "edit") {
      this.props.editContactAction({
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
      });
    } else if (mode == "add") {
      this.props.addContactAction({
        id: String(Date.now()),
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
      });
    }

    this.props.navigation.pop();
  };

  onPressCancel = (item) => {
    this.props.navigation.pop();
  };

  textChange = (field, text) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.bigCircle}></View>
            <Text style={styles.textSection}>Main Information</Text>
            <View style={styles.row}>
              <Text style={styles.text1}>First Name</Text>
              <TextInput
                onChangeText={this.textChange.bind(this, "firstName")}
                style={styles.input1}
                value={this.state.firstName}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.lastNameTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.text1}>Last Name</Text>
              <TextInput
                ref={(input) => {
                  this.lastNameTextInput = input;
                }}
                onChangeText={this.textChange.bind(this, "lastName")}
                style={styles.input1}
                value={this.state.lastName}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.emailTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>
            <Text style={styles.textSection}>Sub Information</Text>
            <View style={styles.row}>
              <Text style={styles.text1}>Email</Text>
              <TextInput
                ref={(input) => {
                  this.emailTextInput = input;
                }}
                keyboardType="email-address"
                onChangeText={this.textChange.bind(this, "email")}
                style={styles.input1}
                value={this.state.email}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.phoneTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.text1}>Phone</Text>
              <TextInput
                ref={(input) => {
                  this.phoneTextInput = input;
                }}
                onChangeText={this.textChange.bind(this, "phone")}
                style={styles.input1}
                value={this.state.phone}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
