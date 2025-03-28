import {View, Text, Button} from 'react-native';
import { useRouter } from 'expo-router';



export default function Dashboard(){
    const router = useRouter();

    const addNewGuide =  ()=>{
        router.push('/Screen/AddNewGuide')
    }
    return(
        <View>
            <Text>This is an example of Dashbord</Text>
            <Button title='Add New Guide' onPress={addNewGuide} />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Button title='Step Show' onPress={()=>router.push('/Screen/StepShowMain')}/>
        </View>
    )
}

