import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/contacts";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: undefined,
    };
  }

  componentDidMount() {
    this.reloadData();

    this.props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={this.onPressAddContact}>
          <Icon name="search" style={styles.icon} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={this.onPressAddContact}>
          <Icon name="plus" style={styles.icon} />
        </TouchableOpacity>
      ),
    });
  }

  reloadData = () => {
    this.props.listContactAction();
  };

  onPressAddContact = () => {
    this.props.navigation.navigate("Contact", {
      mode: "add",
    });
  };

  onPress = (item) => {
    this.props.navigation.navigate("Contact", {
      contact: item,
      mode: "edit",
    });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this, item)}>
        <View style={styles.row}>
          <View style={styles.circle}></View>
          <Text style={styles.text1}>
            {item.firstName + " " + item.lastName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeperator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          ItemSeparatorComponent={this.renderSeperator}
          refreshing={this.props.contacts.loading}
          onRefresh={this.reloadData}
          data={this.props.contacts.contacts}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}
