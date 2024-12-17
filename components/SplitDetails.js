import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const SplitDetails = ({ route }) => {
  const { split, index } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Split {index + 1}</Text>
      <ScrollView>
        {Object.keys(split).map((day) => (
          <View key={day} style={styles.card}>
            <Text style={styles.day}>{day}:</Text>
            <Text style={styles.info}>Muscle Group: {split[day] || "Rest"}</Text>
            <Text style={styles.info}>Sets: 4</Text>
            <Text style={styles.info}>Calories Goal: 300</Text>
            <Text style={styles.info}>Type: Strength Training</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  day: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  info: {
    fontSize: 14,
    color: "#C0C0C0",
    marginTop: 4,
  },
});

export default SplitDetails;
