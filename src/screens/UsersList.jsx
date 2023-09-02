import { View, Text, FlatList } from "react-native";
import { useGetUsersQuery } from "../features/test/UserApiSlice";
import { useRoute, useNavigation } from "@react-navigation/native";
import User from "../components/User";
import { useLayoutEffect, useEffect } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const UsersList = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { searchText } = route?.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Result for ${searchText}`,
    });
  }, [navigation]);

  const {
    data: users,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetUsersQuery(searchText);

  const data = users?.ids?.map((user) => users?.entities[user]);

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

  if ((isSuccess && !data) || !data.length) {
    return (
      <View className="flex-1 bg-gray-900">
        <Text className="text-white text-2xl">no user found</Text>
      </View>
    );
  }

  if (isSuccess) {
    return (
      <View className="bg-gray-800 flex-1">
        <FlatList
          data={data}
          renderItem={(data) => <User userInfo={data} />}
          keyExtractor={(data) => data?.id}
        />
      </View>
    );
  }
};
export default UsersList;
