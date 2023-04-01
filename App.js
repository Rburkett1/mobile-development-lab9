import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Repetition from './components/RepetitionPage/Repetition'
import Duration from './components/Duration/Duration';
import Home from './components/HomePage/Home';
import Water from './components/WaterPage/Water';

const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#34403A', //black olive
            backgroundColor: '#8E8E93'  //ios system gray
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
          },
          headerLeftStyle:{
            color: 'white'
          }
        }}>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ 
        title: 'My Fitness Bro' , 
        }}/>
        <Stack.Screen 
        name="Repetition" 
        component={Repetition} options={{ 
        title: 'Count Your Reps' ,
        }}/>
        <Stack.Screen 
        name= "Duration" 
        component={Duration} 
        options={{ 
        title: 'Start a Timer' ,
        }}/>
        <Stack.Screen name= "Water" component={Water} options={{ title: 'Track Your Water'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
