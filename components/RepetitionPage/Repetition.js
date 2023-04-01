import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  
  ScrollView,
} from "react-native";
import {  useState } from "react";
import { Button } from "react-native-elements";






export default function Repetition(props) {
  const {activity} = props.route.params


  let [count, setCount] = useState(0)
  
  return (
    
      <View style={styles.container}>
        <Text style = {{fontSize: 30, color: 'white'}}>{activity}</Text>
        <View>
          <Text style = {{fontSize: 72, color: 'white'}}>{count}</Text>
        </View>
        <Button
          title="add rep"
          onPress={() => setCount(count + 1)}
          color={'white'}   
          buttonStyle = {styles.Button}     
        />
         <Button
          title="add set"
          onPress={() => setCount(count +10)}
          color={'white'}   
          buttonStyle = {styles.Button}     
        /> 
        <Button
          title="reset"
          onPress={() => setCount(0)}
          color={'white'}   
          buttonStyle = {styles.Button}     
        /> 
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgray",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
  },
  repcount: {
    fontSize: 42,
    color: "red"
  },
  Button:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 50,
    width: 100,
    height: 100,
   // backgroundColor: '#F88141',
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#8E8E93', //ios dark mode background system gray 
  },

});