import { useEffect } from "react";
import { FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/usersSlice";
import User from "../components/User";
import Search from "../components/Search";
import style from "./HomeStyle";

const Home = () => {
  const { users, filteredUsers, isLoading, error } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    console.log("Hello");
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <View style={style.dangerStyle}>
          <Text style={{ color: "white" }}>{error}</Text>
        </View>
      ) : filteredUsers ? (
        <View>
          <Search />
          {filteredUsers.length === 0 ? (
            <View style={style.dangerStyle}>
              <Text style={{ color: "white" }}>No users found!</Text>
            </View>
          ) : (
            <FlatList
              data={filteredUsers}
              renderItem={({ item }) => (
                <View style={{ marginHorizontal: 20 }}>
                  <User user={item}></User>
                </View>
              )}
              keyExtractor={(key) => key.id}
            ></FlatList>
          )}
        </View>
      ) : (
        ""
      )}
    </SafeAreaView>
  );
};

export default Home;
