import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  
  ScrollView,
  FlatList
} from "react-native";
import {  useEffect, useState } from "react";
import {Button} from 'react-native-elements'
import { color } from "react-native-elements/dist/helpers";

//timer runs slower than my react project timer and slower then the timer on iphone. using same code from my react project

const formatTime = (time) => {
    //turning millaseconds into seconds, divide by 6000, modulus by 60 returns whats left over by the seconds 
    let minutes = (Math.floor((time / (100*60)) % 60))

    let seconds = (Math.floor(time / 100 % 60))
    let mil = (time % 100)  
   
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    } 
    if(mil < 10){
        mil = `0${mil}`;
    }
    
    return `${minutes}:${seconds}.${mil}`
}



export default function Duration(props) {

const {activity} = props.route.params
 
    let [curTime, setCurTime] = useState(0)
    let [running, setRunning] = useState(false)
    let [lapList, setLapList] = useState([" "])
    

    
    useEffect(() => {
        if(running){
            const interval = setInterval(() => {
                setCurTime((curTime) => curTime +1);
            }, 10);
            return () => clearInterval(interval)
        }   
    }, [running]   
    
)

function resetTimer(){
    setCurTime(0)
    setRunning(false)
    setLapList(lapList = [" "])
}

function handleAddLap(){
  if(running){
  const newLaps = [...lapList]
  newLaps.push(formatTime(curTime))
  setLapList(newLaps)  
  }else {
    alert("must start timer")
  }
} 
    return (    
      <View style={styles.container}> 
        <View style= {styles.component}> 
        
        <Text style = {{fontSize: 30, color: 'white'}}>{activity}</Text>
        <Text style = {{fontSize: 64, letterSpacing:5, color: 'white'}}>{formatTime(curTime)}</Text>        
        <View style = {styles.buttoncontainer}>
         <Button
           title={running ? 'Stop' : 'Start'}
           onPress={() => !running ? setRunning(true) : setRunning(false)}
           buttonStyle = {styles.Button}            
          
          /> 
          <Button
           title={'reset'}
           onPress={resetTimer}
           color={'white'}  
           buttonStyle = {styles.Button}   
          /> 
          <Button
           title= "log"
           onPress={handleAddLap}
           color={'white'}
           buttonStyle = {styles.Button} 
          />
        </View>
        <ScrollView>
          {lapList.map((lap, i) => {
          return (
            <Text 
            style = {{fontSize: 30, color: 'white'}} 
            key = {i}>                           
              {lap}                                         
            </Text>
          );
          })}
        </ScrollView>
    </View>
    </View>
     
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
  },

  component: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttoncontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0
    
  },
  Button:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
   // backgroundColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 40,
   // backgroundColor: '#F88141',
    backgroundColor: '#8E8E93', //ios dark mode background system gray 
  },
});