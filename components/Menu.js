import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Menu = ({ navigation }) => {
  const [splits, setSplits] = useState([]); // Store all workout splits
  const [isAdding, setIsAdding] = useState(false); // Add split mode
  const [muscleGroups, setMuscleGroups] = useState({}); // Temporarily store a new split

  // Save a new workout split
  const saveSplit = () => {
    const newSplit = { ...muscleGroups }; // Copy current muscleGroups
    setSplits([...splits, newSplit]); // Add new split to splits
    setMuscleGroups({});
    setIsAdding(false);
  };

  // Delete a workout split
  const deleteSplit = (index) => {
    const updatedSplits = splits.filter((_, i) => i !== index); // Remove selected split
    setSplits(updatedSplits);
  };

  if (isAdding) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add New Split</Text>
        <ScrollView>
          {weekdays.map((day) => (
            <View key={day} style={styles.inputContainer}>
              <Text style={styles.dayText}>{day}:</Text>
              <TextInput
                style={styles.input}
                placeholder={`Enter muscle group for ${day}`}
                value={muscleGroups[day] || ""}
                onChangeText={(text) => setMuscleGroups((prev) => ({ ...prev, [day]: text }))}
              />
            </View>
          ))}
        </ScrollView>
        <Button title="Save Split" onPress={saveSplit} color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Splits</Text>
      <Button title="Add New Split" onPress={() => setIsAdding(true)} color="red" />

      <ScrollView>
        {splits.map((split, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.splitTitle}>Workout Split {index + 1}</Text>
            {weekdays.map((day) => (
              <Text key={day} style={styles.splitDetails}>
                {day}: {split[day] || "Rest"}
              </Text>
            ))}
            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigation.navigate("SplitDetails", { split, index })}
              >
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteSplit(index)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
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
    marginBottom: 12,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dayText: {
    fontSize: 16,
    color: "white",
    width: "30%",
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    flex: 1,
    padding: 8,
    borderRadius: 5,
  },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  splitTitle: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
  splitDetails: {
    color: "#C0C0C0",
    marginTop: 4,
  },
  cardButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailsButton: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Menu;
