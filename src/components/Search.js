import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { filterUsers } from "../redux/usersSlice";
import style from "./SearchStyle";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setInput(value);
    dispatch(filterUsers(value));
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={style.titleStyle}>Users List</Text>
      <TextInput
        style={style.inputStyle}
        placeholder="Enter name"
        keyboardType="default"
        value={input}
        onChangeText={handleChange}
      ></TextInput>
    </View>
  );
};

export default Search;
