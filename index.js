import { AppRegistry, Platform } from 'react-native';
import AppWithProvider from './App';
import { store } from './app/store';

AppRegistry.registerComponent('X', AppWithProvider);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('X');
    console.log("root tag")
    console.log(rootTag)
    AppRegistry.runApplication('X', { rootTag });
} else {
    console.log("Platform not web")
}