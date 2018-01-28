import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";

import ProfileData from "./data/shaadiData.json";

const { data } = ProfileData;

const getProfiles = data => {
  return data.map(profile => {
    return profile.mini_profile;
  });
};

const getDisplayNames = data => {
  return data.map(profile => {
    return profile.mini_profile.display_name;
  });
};

export default class App extends React.Component {
  displayNames = (name, index) => <Text key={index}>{name}</Text>;

  displayProfiles = profile => (
    <Card key={profile.username} title={profile.display_name}>
      <View>
        <Text>{profile.about_me}</Text>
      </View>
    </Card>
  );

  render() {
    const displayNames = getDisplayNames(data);
    const profiles = getProfiles(data);

    console.log(profiles);

    return (
      <View style={styles.container}>{profiles.map(this.displayProfiles)}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
