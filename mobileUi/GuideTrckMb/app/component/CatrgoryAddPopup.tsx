import React from "react";
import { View, Text, Modal , TouchableOpacity,StyleSheet, TextInput} from "react-native";
import { insertCategory} from "../Config/db";


interface CategoryAddPopupProps {
    visible: boolean;
    onClose: () => void;
}
const CategoryAddPopup: React.FC<CategoryAddPopupProps> = ({ visible, onClose}) => {

    const [categoryName, setCategoryName] = React.useState<string>("");

    const saveBtn = () => {
        if(!categoryName) {
            alert('Please enter category name');
            return;
        }
        // Hi=ere you can add the logic to save the category name to your database or state
        insertCategory(categoryName);
        console.log('Save button clicked');
      setCategoryName('');
    }

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modelContent}>
                <Text style = {styles.textform}>Create New Category</Text>
                <TextInput placeholder="Enter Category Name" value={categoryName} onChangeText={setCategoryName}  style={styles.textinouts}/>

            <View style = {styles.buttonContainner}>
            <TouchableOpacity style={styles.closeButton} onPress={saveBtn}>
                        <Text style={styles.closeText}>Save</Text>
                      </TouchableOpacity>

             <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeText}>Close</Text>
                      </TouchableOpacity>
            </View>
                
                </View>
      
            </View>
            
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(17, 1, 1, 0.5)",
        justifyContent: "center",
        alignItems: "center",
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
      textform:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modelContent:{
        width: 300,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
      },
      textinouts:{
        borderWidth: 1, 
        width: 200, 
        padding: 10, 
        borderRadius: 5

      }, 
      buttonContainner:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: 20,
        width: '100%',
      }
   
})

export default CategoryAddPopup;