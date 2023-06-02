import { Text, View } from "react-native";
import style from "./DetailsStyle";

const Details = ({ title, data }) => {
  return (
    <View style={style.viewStyle}>
      <Text style={style.titleStyle}>{title}:</Text>
      <Text style={style.detailStyle}>{data}</Text>
    </View>
  );
};

export default Details;
