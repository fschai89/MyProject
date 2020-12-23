import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./containers/ContactsContainer";
import Contact from "./containers/ContactContainer";

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
        }}
      >
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
