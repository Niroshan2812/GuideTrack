import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet, TextInput, Image, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { initializeDatabace, insertStep,fegtchSteps,deleteTables } from '../Config/db'; // Import insertStep function
import StepShow from '../component/StepShow';


export default function AddSteps() {
    const { title } = useLocalSearchParams();
    const [stepNumber, setStepNumber] = useState(1);
    const [task, setTask] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [recordingUri, setRecordingUri] = useState<string | null>(null);
    const [hint, setHint] = useState('');
    const {guideId} = useLocalSearchParams();
    const router = useRouter();
    
useEffect(() => {
    initializeDatabace();
    console.log('Database initialized');
},[]);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const startRecording = async () => {
        try {
            const permission = await Audio.requestPermissionsAsync();
            if (permission.status !== 'granted') {
                console.log('Permission not granted');
                return;
            }

            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            const newRecording = new Audio.Recording();
            await newRecording.prepareToRecordAsync(
                Audio.RecordingOptionsPresets.HIGH_QUALITY
            );

            await newRecording.startAsync();
            setRecording(newRecording);
        } catch (error) {
            console.log('Failed to start recording', error);
        }
    };

    const stopRecording = async () => {
        try {
            if (recording) {
                await recording.stopAndUnloadAsync();
                const uri = recording.getURI();
                console.log(uri);
                setRecordingUri(uri);
                setRecording(null);
            }
        } catch (error) {
            console.log('Failed to stop recording', error);
        }
    };

    const saveStep = async () => {
        await insertStep(parseInt(guideId as string), stepNumber, task, image, recordingUri, hint);
        console.log('Step saved');
        setStepNumber(stepNumber + 1);
        setTask('');
        setImage(null);
        setRecordingUri(null);
        setHint('');
    };

    const fetchStep = async () => {
        const steps = await fegtchSteps();
        console.log(steps);
    }

    const deletetable =  () => {
        deleteTables();
      console.log('Table deleted');
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.header}>Add Step</Text>
                <Text style={styles.title}>Title: {title}</Text>

                <Text style={styles.stepNumber}>Step {stepNumber}</Text>

                <Text>What needs to be done?</Text>
                <TextInput style={styles.input} value={task} onChangeText={setTask} placeholder="Enter Task" />

                <Text>Include Image</Text>
                {image && <Image source={{ uri: image }} style={styles.image} />}
                <Button title="Pick Image" onPress={pickImage} />

                <Text>Voice:</Text>
                <Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} />

                <Text>Add some Hint</Text>
                <TextInput style={styles.input} value={hint} onChangeText={setHint} placeholder="Add some hint" />

                <View style={styles.btnContainer}>
                    <Button title="Next Step" onPress={saveStep} />
                    <Button title="Finish" onPress={() => router.push('/Screen/Dashboard')} />
                    <Button title="Fetch Step" onPress={fetchStep} />
                    <Button title = "delete" onPress={deletetable}/>
                </View>
            </View>
            <View>
                <StepShow/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    formContainer: {
        borderBottomWidth: 1,
        borderRadius: 10,
        shadowColor: 'red',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
    },
    stepNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 5,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingBottom: 20,
    },
});
