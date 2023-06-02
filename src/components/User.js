import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/usersSlice";
import routes from "../common/routes";
import style from "./UserStyle";

const User = ({ user }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={style.viewStyle}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={style.imgStyle}
          source={require("../../assets/images/user.png")}
        ></Image>
        <Text style={style.textStyle}>{user.name}</Text>
      </View>
      <Pressable
        onPress={() => {
          dispatch(getUser(user.id));
          navigate(routes.profile);
        }}
      >
        <Image
          style={style.imgStyle}
          source={require("../../assets/images/right-arrow.png")}
        ></Image>
      </Pressable>
    </View>
  );
};

export default User;
