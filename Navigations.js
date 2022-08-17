import React, { useState, useEffect } from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Navigations() {
    // get Auth Context

    const [status, setStatus] = useState('loading')
    // Load token funtion
   
    useEffect(()=>{

      },[])

    const Stack = createNativeStackNavigator();
        return (
            <Text>Hello </Text>
            // <NavigationContainer >
            //     <Stack.Navigator screenOptions={{ headerShown: false }}>
                
            //     </Stack.Navigator>
            // </NavigationContainer>
        )

}

export default Navigations