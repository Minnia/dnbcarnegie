import { Text, TouchableOpacity } from "react-native";

const HeaderLeft = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={{ marginLeft: 10, fontSize: 16 }}>Cancel</Text>
    </TouchableOpacity>
  );
};

export default HeaderLeft;
