import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  useGetSingleUserQuery,
  useGetUserReposQuery,
} from "../features/test/UserApiSlice";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import SingleUser from "../components/SingleUser";
import ReposList from "../components/ReposList";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SingleUserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userName } = route.params;

  const {
    data: userInfo,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleUserQuery(userName);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${userName}`,
    });
  }, [navigation]);

  const {
    data: repos,
    isLoading: reposLoding,
    isError: reposError,
    isSuccess: reposSuccess,
    error: repoError,
  } = useGetUserReposQuery(userName);

  if (isError) {
    return (
      <View className="flex-1 bg-gray-900">
        <Text>Error:{error}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-800">
      <SingleUser userInfo={userInfo} />
      {reposLoding ? (
        <View>
          <Text className="text-white text-center text-2xl my-5">
            Loding repositories
          </Text>
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        </View>
      ) : (
        <ReposList repos={repos} />
      )}
    </View>
  );
};

export default SingleUserScreen;
