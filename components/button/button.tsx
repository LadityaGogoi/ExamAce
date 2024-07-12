import { Text, TouchableOpacity } from "react-native";

const Button = ({ title, onPress }: { title: string; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
