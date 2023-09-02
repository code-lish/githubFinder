import { View, Text } from "react-native";

const RepoItem = ({ repo: { item } }) => {
  const {
    name,
    description,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = item;
  return (
    <View className="bg-gray-950 p-4 my-2 mx-3 rounded-md">
      <Text className="text-white text-2xl">{name}</Text>
      <Text className="text-gray-400 ">{description}</Text>
      <View className="flex-row justify-between mt-4">
        <Text className="bg-gray-900 text-center font-bold px-4 py-1 rounded-md text-cyan-500">
          {watchers_count}
        </Text>
        <Text className="bg-gray-900 text-center font-bold px-4 py-1 rounded-md text-lime-500 ">
          {stargazers_count}
        </Text>
        <Text className="bg-gray-900 text-center font-bold px-4 py-1 rounded-md text-rose-500 ">
          {open_issues}
        </Text>
        <Text className="bg-gray-900 text-center font-bold px-4 py-1 rounded-md text-amber-500 ">
          {forks}
        </Text>
      </View>
    </View>
  );
};

export default RepoItem;
