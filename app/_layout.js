import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const noHead = { headerShown: false };

const StackLayout = () => {
  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen name="(tabs)" options={noHead} />
        <Stack.Screen name="index" options={noHead} />
        <Stack.Screen name="news-detail" options={noHead} />
      </Stack>
    </GluestackUIProvider>
  );
};

export default StackLayout;

