import "react-native-gesture-handler";

import { StatusBar } from "react-native";

import { AppearanceProvider } from "react-native-appearance";
import { GlobalContextProvider } from "./src/contexts";

import { StackNavigation } from "./src/navigations";

export default function App() {
  return (
    <GlobalContextProvider>
      <AppearanceProvider>
        <StatusBar barStyle="light-content"></StatusBar>
        <StackNavigation></StackNavigation>
      </AppearanceProvider>
    </GlobalContextProvider>
  );
}
