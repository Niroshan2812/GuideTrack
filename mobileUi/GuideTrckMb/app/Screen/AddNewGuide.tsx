import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { insertGuide, initializeDatabace } from '../Config/db';
import { Ionicons } from '@expo/vector-icons';
import CategoryAddPopup from '../component/CatrgoryAddPopup';


export default function AddNewGuide() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState<{ label: string; value: string }[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [CategoryAddvisble, setCategoryAddvisble] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Fetch categories from the database (simulate with a timeout for now)
        initializeDatabace();
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

    const saveGuideAndGotoSteps = async () => {
        if (!title || !description || !selectedCategory) {
            alert('Please fill all fields');
            return;
        }
        const guideId = await insertGuide(title, description, selectedCategory);
        router.push({ pathname: '/Screen/AddSteps', params: { guideId, title, selectedCategory } });
    }

    const handleAddCategory = () => {
        console.log('Add new category pressed');
        setCategoryAddvisble(true);
    };

    return (
        <View style={styles.containner} >
            <Text style={styles.mainTxt}>Add new Guide </Text>

            <Text style={styles.formText}>Guide Title</Text>
            <TextInput style={styles.formTextInout} placeholder='Enter guide title' value={title} onChangeText={setTitle} />

            <Text style={styles.formText}>Guide Description</Text>
            <TextInput style={styles.formTextArea} placeholder='Enter Guide Description ' multiline value={description} onChangeText={setDescription} />



            <View style={styles.categoryContaineer}>
                <Text style={styles.formText}>Category</Text>
                <TouchableOpacity onPress={handleAddCategory} style={styles.touchableOpacityInCategory}>
                    <Ionicons name='add-circle' size={24} color='blue' />
                </TouchableOpacity>
                <CategoryAddPopup visible={CategoryAddvisble}   onClose={() => setCategoryAddvisble(false)}/>
            </View>
            <Picker selectedValue={selectedCategory} onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                style={styles.pickerStyle}>
                <Picker.Item label='Select a category' value="" />
                {categories.map((cat, index) => (
                    <Picker.Item key={index} label={cat.label} value={cat.value} />
                ))}
            </Picker>




            <Button
                title="Let's goto add steps"
                onPress={saveGuideAndGotoSteps} />
        </View>
    )
}

const styles = StyleSheet.create({
    containner: {
        padding: 20
    },
    mainTxt: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    formText: {
        marginTop: 10
    },
    formTextInout: {
        borderWidth: 1,
        padding: 10,
        marginTop: 5, borderRadius: 5
    },
    formTextArea: {
        borderWidth: 1,
        padding: 10,
        marginTop: 5, borderRadius: 5,
        height: 80,
        textAlignVertical: 'top'
    },
    pickerStyle: {
        borderWidth: 1,
        marginTop: 5
    },
    categoryContaineer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
    ,
    touchableOpacityInCategory: {
        marginEnd: 10,
        opacity: 0.5,
    }
})