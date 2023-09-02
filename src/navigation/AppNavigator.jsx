import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import About from "../screens/About";
import UsersList from "../screens/UsersList";
import SingleUserScreen from "../screens/SingleUserScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Search Github User",
          headerTitleAlign: "center",
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="UsersList" component={UsersList} />
      <Stack.Screen name="singleUser" component={SingleUserScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
