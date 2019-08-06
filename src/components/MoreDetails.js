import React, { Component } from "react";
import { View, Text, Image, Alert, StyleSheet, Button } from "react-native";

export default class componentName extends Component {
  onTab = () => {
    Alert.alert("This feature is being developing :D");
  };

  render() {
    return (
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <View style={styles.headerBar}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 60, height: 60, marginRight: 10 }}
              source={{
                uri: "https://img.icons8.com/nolan/64/000000/driver.png"
              }}
            />
          </View>
          <View style={{ justifyContent: "center", flexDirection: "column" }}>
            <Text style={{ color: "#fff" }}>Dan Nguyen Nhat Truong</Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                onPress={this.onTab}
                style={{ fontSize: 10, color: "#fff", marginRight: 10 }}
              >
                Hồ sơ của bạn >
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 8 }}>
          <View style={styles.firstWrap}>
            <Image
              style={{ width: 40, height: 40, marginRight: 10 }}
              source={{
                uri:
                  "https://img.icons8.com/offices/40/000000/star-half-empty.png"
              }}
            />
            <Text onPress={this.onTab}>Rank</Text>
          </View>
          <View style={styles.wrap}>
            <Image
              style={{ width: 40, height: 40, marginRight: 10 }}
              source={{
                uri: "https://img.icons8.com/wired/64/000000/support.png"
              }}
            />
            <Text onPress={this.onTab}>Hỗ trợ</Text>
          </View>
          <View style={styles.wrap}>
            <Image
              style={{ width: 40, height: 40, marginRight: 10 }}
              source={{
                uri:
                  "https://img.icons8.com/dotty/80/000000/play-graph-report.png"
              }}
            />
            <Text onPress={this.onTab}>Thống kê</Text>
          </View>
          <View style={styles.wrap}>
            <Image
              style={{ width: 40, height: 40, marginRight: 10 }}
              source={{
                uri: "https://img.icons8.com/bubbles/50/000000/prize.png"
              }}
            />
            <Text onPress={() => navigator.geolocation.getCurrentPosition(info => Alert.alert(info))}>Điểm thưởng</Text>
          </View>
          <View style={styles.wrap}>
            <Image
              style={{ width: 40, height: 40, marginRight: 10 }}
              source={{
                uri: "https://img.icons8.com/ios-filled/50/000000/estimates.png"
              }}
            />
            <Text onPress={this.onTab}>Đánh giá từ khách hàng</Text>
          </View>
          <View style={styles.wrap}>
            <Image
              style={{ width: 40, height: 40, marginRight: 10 }}
              source={{
                uri: "https://img.icons8.com/ios-filled/50/000000/task.png"
              }}
            />
            <Text onPress={this.onTab}>Nhiệm vụ</Text>
          </View>
          <View style={{ flex: 4, borderTopColor: "#333", borderWidth: 0.5 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    borderBottomColor: "#333",
    borderWidth: 0.5,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  firstWrap: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  headerBar: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  }
});
