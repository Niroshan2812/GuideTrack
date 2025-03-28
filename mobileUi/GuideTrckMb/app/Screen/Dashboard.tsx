import {View, Text, Button} from 'react-native';
import { useRouter } from 'expo-router';
import {fegtchSteps, initializeDatabace,fetchGuide, fetchCategory} from '../Config/db';
import { useEffect } from 'react';



export default function Dashboard(){
    const router = useRouter();

    const addNewGuide =  ()=>{
        router.push('/Screen/AddNewGuide')
    }
    const getAllDetails = async () => {
        const steps = await fegtchSteps();
        console.log('Fetched steps:', steps);
    }
    const getAllguide = async () => {
        const guides = await fetchGuide();
        console.log('Fetched guides:', guides);
    }

    const fetchCategorys = async () => {
        const category = await fetchCategory();
        console.log('Fetched category:', category);
    }

    useEffect(() => {
        initializeDatabace();
    },[]);
    return(
        <View>
            <Text>This is an example of Dashbord</Text>
            <Button title='Add New Guide' onPress={addNewGuide} />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Button title='Step Show' onPress={()=>router.push('/Screen/StepShowMain')}/>

            <Button title='get all details' onPress={getAllDetails}/>

            <Button title = 'get all guide Details ' onPress={getAllguide}/>

            <Button title='get all category' onPress={fetchCategorys}/>
        </View>
    )
}

