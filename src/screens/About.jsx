import { View, Text, Button } from "react-native";

const About = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-white text-3xl">This is about screen.</Text>
      <View className="mt-5">
        <Button title="Go to home screen" onPress={onPress} />
      </View>
    </View>
  );
};

export default About;
