import { Button, View } from "react-native";

export function LoginPage({ navigation }) {
  return (
    <View style={{ alignItems: "center", margin: 50 }}>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("transactionsPage");
        }}
      />
    </View>
  );
}
