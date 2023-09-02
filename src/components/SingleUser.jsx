import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import Box from "./Box";
// import { useNavigation } from "@react-navigation/native";

const SingleUser = ({ userInfo }) => {
  // const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate("singleUser", { userName: item?.login });
  // };

  return (
    <View className="py-2 my-3 mx-2 rounded-lg px-1 w-full">
      <View className="flex-row items-start w-full">
        <Avatar.Image size={100} source={{ uri: userInfo?.avatar_url }} />
        <View className="flex-col">
          <Text className="text-white text-2xl pl-3 mt-5">
            {userInfo?.name}
          </Text>

          <View className="flex-row justify-between mt-1 ">
            <Text className="text-gray-400 pl-3">{userInfo?.login}</Text>

            <Text className="text-lime-500 bg-gray-900 text-center px-2 rounded-md">
              {userInfo?.type}
            </Text>

            {userInfo?.hireable && (
              <Text className="bg-gray-900 text-center px-2 rounded-md text-cyan-500">
                Hirable
              </Text>
            )}
          </View>

          <Text className="text-gray-400 w-[260px] pl-3 mt-2">
            {userInfo?.bio}
          </Text>
        </View>
      </View>
      <View className="flex-row justify-between mt-4">
        <Box title="Location" subTitle={userInfo?.location} />
        <Box title="Website" subTitle={userInfo?.blog} />
      </View>
      <View className="flex-row justify-between mt-2">
        <Box title="Followers" subTitle={userInfo?.followers} />
        <Box title="Following" subTitle={userInfo?.following} />
      </View>
      <View className="flex-row justify-between mt-2">
        <Box title="Public repos" subTitle={userInfo?.public_repos} />
        <Box title="Public gists" subTitle={userInfo?.public_gists} />
      </View>

      <Text className="mt-4 text-white text-2xl">Latest Repositories</Text>
    </View>
  );
};

export default SingleUser;
