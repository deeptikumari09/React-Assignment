import {View,StyleSheet,Alert} from 'react-native'
import {useState} from 'react'
import { TextInput,Button,Card } from 'react-native-paper';
import {useDispatch} from 'react-redux'
import {addItem} from '../redux/BudgetList'


function BudgetEntryScreen({navigation})
{   
    const [name, setName] = useState('');
    const [plannedAmount,setPlannedAmount] = useState('')
    const [actualAmount,setActualAmount] = useState('')

    const dispatch = useDispatch();

    function resetInputHandler()
    {
        setName('')
        setPlannedAmount('')
        setActualAmount('')
    }

    function saveDetailsHandler()
    {   
        if(name === '' || plannedAmount === '' || actualAmount === '')
        {
            Alert.alert(
                "Invalid Input",
                "Please enter all the values!",
                [{text : "Okay",style :'default' ,onPress : resetInputHandler}]
                )
                return;
        }
        else{
        dispatch(addItem({
            item : {
                Id : Math.floor(Math.random()*1000),
                ItemName : name,
                pAmount : plannedAmount,
                rAmount : actualAmount
            }
        }))
        Alert.alert(
                "Success",
                "Budget details saved successfully!!",
                [{ text : 'Okay',style : 'destructive',onPress : resetInputHandler}]
                ) }  
    }

    function showDetailsHandler()
    {
       navigation.navigate("Budget List");
    }

    return <View style={styles.rootContainer}>
        <Card style={styles.card}>
            <Card.Content style={styles.body}>
                <TextInput
                    label="Item name"
                    value={name}
                    onChangeText={name => setName(name)}
                    style ={styles.textInput}
                />
                <TextInput
                    label="Planned amount"
                    value={plannedAmount}
                    keyboardType = 'number-pad'
                    onChangeText={plannedAmount => setPlannedAmount(plannedAmount)}
                    style ={styles.textInput}
                />
                <TextInput
                    label="Actual amount"
                    value={actualAmount}
                    keyboardType = 'number-pad'
                    onChangeText={actualAmount => setActualAmount(actualAmount)}
                    style ={styles.textInput}
                />
                 <View style={styles.content}>
                    <View style={styles.btn}>
                        <Button mode="contained" onPress={saveDetailsHandler}>Save</Button>
                    </View>
                    <View style={styles.btn}>
                            <Button mode="contained" onPress={showDetailsHandler}>Show Details</Button>
                    </View>
                </View> 
            </Card.Content>
        </Card>
    </View>
}

export default BudgetEntryScreen;

const styles = StyleSheet.create({
    rootContainer : {
        flex : 1,
        marginTop : 12
    },
    card : {
        marginHorizontal : 12,
        marginVertical : 48,
    },
    body: {
        paddingVertical : 24,
    },
    textInput : {
        marginBottom : 12
    },
    btn : {
        marginBottom : 24
    },
    content : {
        paddingVertical : 24
    }
})