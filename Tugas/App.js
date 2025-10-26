import { useRef, useState } from "react";
import { DrawerLayoutAndroid, StatusBar } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./gluestack-ui.config";
import { Box, VStack } from "@gluestack-ui/themed";
import Header from "./components/header";
import Button from "./components/button";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");
  // Ref Declaration
  const drawer = useRef(null);

  // Arrow Function inside Functional Component
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value
    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  const navigationView = () => (
    <Box bg="$coolGray900" flex={1} p="$8">
      <VStack space="md">
        <Button text="List" onPress={() => changePage(drawer, "list")} />
        <Separator height={30} />
        <Button text="Article" onPress={() => changePage(drawer, "article")} />
        <Separator height={30} />
        <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
      </VStack>
    </Box>
  );

  return (
    <GluestackUIProvider config={config}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={navigationView}
      >
        <StatusBar style="light" backgroundColor="#DC143C" />
        <Box flex={1}>
          <Header drawer={drawer} />
          {page == "list" ? <List /> : page == "article" ? <Article /> : null}
        </Box>
      </DrawerLayoutAndroid>
    </GluestackUIProvider>
  );
};

export default App;