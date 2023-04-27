import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BudgetEntryScreen from './screens/BudgetEntryScreen';
import BudgetEntryListing from './screens/BudgetEntryListing';
import {store} from './redux/store';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#4722bf'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#363945'},
            }}>
            <Stack.Screen name="Budget Entry" component={BudgetEntryScreen} />
            <Stack.Screen name="Budget List" component={BudgetEntryListing} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
