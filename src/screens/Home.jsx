import { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const onSubmit = () => {
    if (searchQuery.trim()) {
      navigation.navigate("UsersList", {
        searchText: searchQuery,
      });

      setSearchQuery("");
    }
  };

  return (
    <View className="flex-1 items-start justify-start bg-gray-800 pt-5">
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

export default Home;
