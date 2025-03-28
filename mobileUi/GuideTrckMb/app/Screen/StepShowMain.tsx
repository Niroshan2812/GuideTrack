import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import StepCard from "../component/StepCard";

const steps = [
    { step: 1, title: "Research", description: "Understanding the problem", icon: "search", image: "https://via.placeholder.com/200", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { step: 2, title: "Idea", description: "Generating possible solutions", icon: "lightbulb-o", image: "https://via.placeholder.com/200", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { step: 3, title: "Planning", description: "Creating a structured plan", icon: "clipboard", image: "https://via.placeholder.com/200", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { step: 4, title: "Time", description: "Managing the timeline efficiently", icon: "clock-o", image: "https://via.placeholder.com/200", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { step: 5, title: "Success", description: "Achieving the final goal", icon: "flag-checkered", image: "https://via.placeholder.com/200", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  ];

export default function StepShowMain() {
    return (
        <FlatList
        data={steps}
        renderItem={({ item }) => <StepCard {...item}/>}
        keyExtractor={(item) => item.step.toString()}
        numColumns={2} // Adjust this to set how many columns per row
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.row} // Ensures proper spacing between columns
      />
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
      },
      row: {
        justifyContent: "space-around", // Distributes cards evenly
      },
})
