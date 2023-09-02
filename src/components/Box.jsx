import { View, Text } from "react-native";

const Box = ({ title, subTitle }) => {
  return (
    <View className="bg-gray-950 basis-[45%] rounded-md py-1  px-2 mr-3 ">
      <Text className="text-white text-1xl">{title}</Text>
      <Text className="text-gray-400 text-1xl">{subTitle}</Text>
    </View>
  );
};

export default Box;
