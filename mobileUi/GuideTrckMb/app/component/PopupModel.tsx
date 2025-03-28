import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from "react-native";

interface PopupModelProps {
  visible: boolean;
  title: string;
  description: string;
  image: string;
  onClose: () => void;
  onPlaySound: () => void;
}

const PopupModel: React.FC<PopupModelProps> = ({ visible, title, description, image, onClose, onPlaySound }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.modalDescription}>{description}</Text>

          <TouchableOpacity style={styles.audioButton} onPress={onPlaySound}>
            <Text style={styles.audioText}>▶ Play Voice</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  audioButton: {
    backgroundColor: "#6200EE",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  audioText: {
    color: "white",
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PopupModel;
