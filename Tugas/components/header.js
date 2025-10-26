import { Image } from "react-native";
import { Box, HStack, Pressable } from "@gluestack-ui/themed";

// Functional Component with props
const Header = (props) => {
    return (
        <Box bg="$primary500" p="$4">
            <HStack 
                justifyContent="space-between" 
                alignItems="center"
                flexDirection="row"
                w="$full"
            >
                <Pressable onPress={() => props.drawer.current.openDrawer()}>
                    <Box w={18} h={18}>
                        <Image
                            source={require("../assets/menu.png")}
                            style={{ width: 18, height: 18, tintColor: '#fff' }}
                        />
                    </Box>
                </Pressable>
                
                <HStack 
                    alignItems="center" 
                    justifyContent="center" 
                    space="md"
                    flexDirection="row"
                >
                    <Box w={36} h={16}>
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{ width: 36, height: 16, resizeMode: "contain", tintColor: '#fff' }}
                        />
                    </Box>
                    <Box w={36} h={16}>
                        <Image
                            source={require("../assets/youtube.png")}
                            style={{ width: 36, height: 16, resizeMode: "contain", tintColor: '#fff' }}
                        />
                    </Box>
                    <Box w={36} h={16}>
                        <Image
                            source={require("../assets/twitter.png")}
                            style={{ width: 36, height: 16, resizeMode: "contain", tintColor: '#fff' }}
                        />
                    </Box>
                    <Box w={36} h={16}>
                        <Image
                            source={require("../assets/search.png")}
                            style={{ width: 36, height: 16, resizeMode: "contain", tintColor: '#fff' }}
                        />
                    </Box>
                </HStack>
            </HStack>
        </Box>
    );
};

export default Header;
