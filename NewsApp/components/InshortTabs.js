import * as React from "react";
import { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

import DiscoverScreen from "../screens/DiscoverScreens";
import NewsScreen from "../screens/NewsScreen";

export default function InshortTabs() {
  const dimension = useWindowDimensions();

  const [index, setIndex] = useState(1);

  const [routes] = React.useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "All News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: dimension.width }}
    />
  );
}
