import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import Home from "./src/components/Home";
import Wallet from "./src/components/Wallet";
import History from "./src/components/History";
import More from "./src/components/More";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wallet" component={Wallet} />
            <Route exact path="/history" component={History} />
            <Route exact path="/more" component={More} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
