import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const User = ({ userInfo: { item } }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("singleUser", { userName: item?.login });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-gray-950 py-2 my-3 mx-4 rounded-lg px-3">
        <View className="flex-row items-center">
          <Avatar.Image size={100} source={{ uri: item?.avatar_url }} />
          <View className="flex-col">
            <View>
              <Text className="text-white text-2xl pl-3">{item?.login}</Text>
            </View>
            <View>
              <Text className="text-gray-400 text-1xl pl-3">{item?.type}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default User;
