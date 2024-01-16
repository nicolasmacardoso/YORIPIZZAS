import { View, StatusBar } from 'react-native';
import SignIn from './src/pages/SignIn';

export default function App() {
  return (
    <View>
      <SignIn/>
      <StatusBar hidden/>
    </View>
  );
}