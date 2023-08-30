import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "../features/testSlice";
import { useGetTestPostsQuery } from "../features/test/testApiSlice";
import { selectAllPosts } from "../features/test/testApiSlice";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const { data: posts, isLoading, isSuccess, isError } = useGetTestPostsQuery();

  const allPosts = useSelector(selectAllPosts);

  console.log({ allPosts });

  const { value } = useSelector((state) => state.test);

  const onPress = () => {
    navigation.navigate("About");
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-white text-3xl">This is home screen.</Text>

      <Text className="text-white text-4xl my-5">CurrentValue is:{value}</Text>

      <View className="mt-5">
        <Button title="Go to about screen" onPress={onPress} />
      </View>

      <View className="my-4">
        <Button
          title="Increment Value"
          onPress={() => dispatch(incremented())}
        />
      </View>

      <View>
        <Button
          title="Decrement Value"
          onPress={() => dispatch(decremented())}
        />
      </View>
    </View>
  );
};

export default Home;
