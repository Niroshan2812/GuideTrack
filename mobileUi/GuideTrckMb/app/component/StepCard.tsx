import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import StepModal from "./PopupModel";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: any;
  image: string;
  audio: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description, icon, image, audio }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const playSound = () => {
    console.log("Loading Sound");
  };

  return (
    <>
      {/* Step Card */}
      <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
        <Text style={styles.stepNumber}>{step}</Text>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {/* Step Modal */}
      <StepModal
        visible={modalVisible}
        title={title}
        description={description}
        image={image}
        onClose={() => setModalVisible(false)}
        onPlaySound={playSound}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  stepNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6200EE",
  },
  title: {
    fontSize: 16,
    marginTop: 5,
    color: "#333",
  },
});

export default StepCard;
