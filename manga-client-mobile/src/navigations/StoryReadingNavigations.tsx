import { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ReadingScreen, StoryScreen } from "../screens";

const Stack = createNativeStackNavigator();

const StoryReadingNavigations: FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Story", headerShown: false }}
        name="Story"
        component={StoryScreen}
      />
      <Stack.Screen
        options={{ title: "Reading", headerShown: false }}
        name="Reading"
        component={ReadingScreen}
      />
    </Stack.Navigator>
  );
};

export default StoryReadingNavigations;
