import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";

import { Provider } from "react-redux";
import { store } from "./src/app/store";
import Search from "./src/components/Search";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigator />
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
