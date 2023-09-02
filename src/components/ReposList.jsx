import { View, FlatList } from "react-native";
import RepoItem from "./RepoItem";

const ReposList = ({ repos }) => {
  return (
    <View className="flex-1 mb-4">
      <FlatList
        data={repos}
        renderItem={(repo) => <RepoItem repo={repo} />}
        keyExtractor={(repo) => repo?.id}
      />
    </View>
  );
};

export default ReposList;
