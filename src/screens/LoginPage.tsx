import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { RootStackParams } from "../../App";

type Props = NativeStackScreenProps<RootStackParams>;

export function LoginPage({ navigation }: Props) {
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
