import { Box, Image, HStack, Heading } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

const Header = ({ title, withBack = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={trueGray900} />
      <Box bg="$trueGray900" p="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                <Image
                  source={require("../assets/cnn.png")}
                  w="$12"
                  h="$12"
                  alt="CNN Logo"
                  mr={"$3"}
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"$3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
            <Heading color={"$white"}>{title}</Heading>
          </HStack>

          <HStack space={"2xl"}>
            <Image
              source={require("../assets/facebook.png")}
              w="$5"
              h="$5"
              alt="Facebook Icon"
            />
            <Image
              source={require("../assets/youtube.png")}
              w="$5"
              h="$5"
              alt="Facebook Icon"
            />
            <Image
              source={require("../assets/twitter.png")}
              w="$5"
              h="$5"
              alt="Facebook Icon"
            />
            <Image
              source={require("../assets/search.png")}
              w="$5"
              h="$5"
              alt="Search Icon"
            />
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;

