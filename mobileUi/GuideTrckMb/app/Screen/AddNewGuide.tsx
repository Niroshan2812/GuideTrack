import { useEffect, useState } from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';

export default function AddNewGuide(){
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categories,setCategories] = useState<{label:string; value:string}[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const router= useRouter();

    useEffect(() => {
        // Fetch categories from the database (simulate with a timeout for now)
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        // Simulating fetching from DB
        const fetchedCategories = [
            { label: 'Education', value: 'education' },
            { label: 'Technology', value: 'technology' },
            { label: 'Lifestyle', value: 'lifestyle' }
        ];
        setCategories(fetchedCategories);
    };

    return(
        <View style={styles.containner} >
            <Text style = {styles.mainTxt}>Add new Guide </Text>

            <Text style = {styles.formText}>Guide Title</Text>
            <TextInput style = {styles.formTextInout} placeholder='Enter guide title' value={title} onChangeText={setTitle}/>
            
            <Text style = {styles.formText}>Guide Description</Text>
            <TextInput style={styles.formTextArea} placeholder='Enter Guide Description ' multiline value={description} onChangeText={setDescription}/>

            <Text style = {styles.formText}>Category</Text>
            <Picker selectedValue={selectedCategory} onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.pickerStyle}>
                <Picker.Item label='Select a category' value=""/>
                {categories.map((cat,index)=>(
                    <Picker.Item key={index} label={cat.label} value={cat.value}/>
                ))}
            </Picker>
            
            <Button 
                title= "Let's goto add steps"
                onPress={()=>router.push({pathname:'/Screen/AddSteps',params:{title,description, selectedCategory}} )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containner:{
        padding:20
    },
    mainTxt:{
        fontSize:18,
        fontWeight:'bold',

    },
    formText:{
        marginTop:10
    },
    formTextInout:{
        borderWidth:1,
        padding:10,
        marginTop:5, borderRadius:5
    },
    formTextArea:{
        borderWidth:1,
        padding:10,
        marginTop:5, borderRadius:5,
        height:80,
        textAlignVertical:'top'
    },
    pickerStyle:{
        borderWidth:1,
        marginTop:5
    }
})