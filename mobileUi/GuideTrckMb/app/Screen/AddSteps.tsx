import { useLocalSearchParams, useRouter } from 'expo-router';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function AddSteps(){
    const {title,description, selectedCategory} = useLocalSearchParams();
    const router = useRouter();

    return(
        <View>
            <Text>Add step </Text>
            <Text>Title: {title}</Text>
            <Text>Description: {description}</Text>
            <Text>Category: {selectedCategory}</Text>
        </View>
    )
}