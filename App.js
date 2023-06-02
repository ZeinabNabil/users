import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigations/Root";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Root></Root>
      </Provider>
    </NavigationContainer>
  );
}
