import { FC, useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { NavigationContext } from "../contexts";

import { View } from "react-native";
import {
  CustomText,
  FingerprintIcon,
  HomeIcon,
  LibraryIcon,
  MuseumIcon,
  NotificationIcon,
} from "../components/atoms";

import {
  ExploreScreen,
  HomeScreen,
  LibraryScreen,
  MangaScreen,
  SettingsScreen,
} from "../screens";
import StoryReadingNavigations from "./StoryReadingNavigations";

import { COLORS, FONT_SIZES } from "../styles/variables";

const Tab = createBottomTabNavigator();

enum TabNames {
  HOME = "Home",
  EXPLORE = "Explore",
  MANGA = "Manga",
  LIBRARY = "Library",
  NEWS = "News",
}

const icons = {
  Home: <HomeIcon />,
  Explore: <FingerprintIcon />,
  Manga: <MuseumIcon />,
  Library: <LibraryIcon />,
  News: <NotificationIcon />,
};

const focusedIcons = {
  Home: <HomeIcon color={COLORS.red} />,
  Explore: <FingerprintIcon color={COLORS.red} />,
  Manga: <MuseumIcon color={COLORS.red} />,
  Library: <LibraryIcon color={COLORS.red} />,
  News: <NotificationIcon color={COLORS.red} />,
};

const SubscribedNavigation: FC<{}> = () => {
  const { isFullScreen } = useContext(NavigationContext);

  const getTabBarLabelText = (focused: boolean, text: string) => {
    return (
      <View style={{ paddingBottom: wp(2) }}>
        {focused ? (
          <CustomText fontSize={FONT_SIZES.m} color={COLORS.red}>
            {text}
          </CustomText>
        ) : (
          <CustomText fontSize={FONT_SIZES.m}>{text}</CustomText>
        )}
      </View>
    );
  };

  const getTabBarIcon = (focused: boolean, text: TabNames) => {
    return focused ? focusedIcons[text] : icons[text];
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: isFullScreen ? wp(0) : wp(15) },
        headerShown: false,
      }}
      initialRouteName="Home"
      backBehavior="history"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => getTabBarIcon(focused, TabNames.HOME),
          tabBarLabel: ({ focused }) =>
            getTabBarLabelText(focused, TabNames.HOME),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => getTabBarIcon(focused, TabNames.EXPLORE),
          tabBarLabel: ({ focused }) =>
            getTabBarLabelText(focused, TabNames.EXPLORE),
        }}
      />
      <Tab.Screen
        name="Manga"
        component={MangaScreen}
        options={{
          tabBarIcon: ({ focused }) => getTabBarIcon(focused, TabNames.MANGA),
          tabBarLabel: ({ focused }) =>
            getTabBarLabelText(focused, TabNames.MANGA),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ focused }) => getTabBarIcon(focused, TabNames.LIBRARY),
          tabBarLabel: ({ focused }) =>
            getTabBarLabelText(focused, TabNames.LIBRARY),
        }}
      />
      <Tab.Screen
        name="News"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => getTabBarIcon(focused, TabNames.NEWS),
          tabBarLabel: ({ focused }) =>
            getTabBarLabelText(focused, TabNames.NEWS),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarButton: () => null,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="StoryReading"
        component={StoryReadingNavigations}
        options={{
          tabBarButton: () => null,
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default SubscribedNavigation;
