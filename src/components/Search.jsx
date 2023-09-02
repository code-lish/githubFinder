import { useState } from "react";
import { Searchbar } from "react-native-paper";
import SafeArea from "./common/SafeArea";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        onSubmitEditing={onSubmit}
        className="mt-5"
        value={searchQuery}
      />
      {/* {isLoading ||
        (isFetching && (
          <Text className="text-white text-5xl">Loading... </Text>
        ))}

      {users?.ids.map((user) => {
        return <User key={user} userInfo={users?.entities[user]} />;
      })} */}
    </SafeArea>
  );
};

export default Search;
