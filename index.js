// Package imports
import { AppRegistry } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

// Custom imports
import { name } from './app.json';
import App from './src/App';

AppRegistry.registerComponent(name, () => gestureHandlerRootHOC(App));
