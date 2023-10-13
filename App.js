import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";
import { store } from "./src/store/Store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />

      <ModalPortal />
    </Provider>
  );
}
