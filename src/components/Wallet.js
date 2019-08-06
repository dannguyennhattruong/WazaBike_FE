import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default ({ history }) => {
  return (
    <View style={styles.container}>
      <Text>Heelo from Wallet</Text>
      <View style={styles.nav}>
        <View style={styles.navIn}>
          <View style={{ flex: 1 }}>
            <Button
              style={styles.buttonWrap}
              color="#333"
              title="Home"
              onPress={() => history.push("/")}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              style={styles.buttonWrap}
              color="#333"
              title="Wallet"
              onPress={() => history.push("/wallet")}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              style={styles.buttonWrap}
              color="#333"
              title="History"
              onPress={() => history.push("/history")}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              style={styles.buttonWrap}
              color="#333"
              title="More"
              onPress={() => history.push("/more")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  nav: {
    width: "100%",
    height: "5%",
    backgroundColor: "#333",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonWrap: {
    flex: 1,
    marginLeft: 200,
    height: 300,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  navIn: {
    flex: 1,
    flexDirection: "row",
    flexWrap : "wrap",
    position :"absolute",
    bottom :0,
  },
});
