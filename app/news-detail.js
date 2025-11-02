import { 
  Heading, 
  Text, 
  ScrollView, 
  VStack, 
  Image,
  Box
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import { Dimensions } from "react-native";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  const { width } = Dimensions.get('window');

  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView flex={1} backgroundColor="$white">
        <Box>
          <Image
            source={{
              uri: params.image
            }}
            alt={params.title}
            style={{
              width: width,
              height: 300,
            }}
            resizeMode="cover"
          />
        </Box>

        <VStack space="md" padding="$4">
          <Text 
            size="lg" 
            color="$gray600"
          >
            {params.date}
          </Text>

          <Heading 
            size="3xl" 
            color="$black"
            lineHeight="$3xl"
            fontWeight="$bold"
          >
            {params.title}
          </Heading>

          <Text 
            size="xl" 
            color="$gray800"
            lineHeight="$xl"
            textAlign="justify"
          >
            {params.content}
          </Text>
        </VStack>
      </ScrollView>
    </>
  );
};

export default NewsDetail;

