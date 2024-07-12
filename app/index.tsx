import { Text, View } from "react-native";
import React, { useState } from "react";
import { DefaultStyles } from "@/constants";
import { Redirect } from "expo-router";

const Welcome = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  return (
    <>
      {loading ? (
        <View>
          <Text style={DefaultStyles.Regular}>Loading...</Text>
        </View>
      ) : (
        <Redirect href={!user ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  );
};

export default Welcome;
