import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { SquircleView } from "react-native-figma-squircle";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View
        style={{
          borderCurve: "circular", // normal
          borderRadius: 30,
          backgroundColor: "gray",
          width: "100%",
          height: 100,
        }}
      >
        <ThemedText type="defaultSemiBold" style={{ textAlign: "center" }}>
          a circular border radius view
        </ThemedText>
      </View>
      <View
        style={{
          borderCurve: "continuous", // squircle, works only on ios
          borderRadius: 30,
          backgroundColor: "gray",
          width: "100%",
          height: 100,
        }}
      >
        <ThemedText type="defaultSemiBold" style={{ textAlign: "center" }}>
          a continuous/squircle border radius view
        </ThemedText>
      </View>
      {/* squircle using react-native-figma-squircle package */}
      <SquircleView
        style={{ width: "100%", height: 100 }}
        squircleParams={{
          cornerSmoothing: 0.7,
          cornerRadius: 30,
          fillColor: "gray",
        }}
      >
        <ThemedText type="defaultSemiBold" style={{ textAlign: "center" }}>
          a continuous/squircle border radius view
        </ThemedText>
      </SquircleView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
