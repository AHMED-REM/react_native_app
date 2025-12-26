import { StyleSheet, View, Text } from 'react-native';
import Header from './Header';
import Card from './Card';

export default function ScreenDashboard() {

  return (
    <View style={styles.container}>
      <Header name="ali" email="ali@gmail.com" />
      <Header name="mohamed" email="mohamed@gmail.com" />
      <Header name="saiid" email="saiid@gmail.com" />
      <Card />
    </View >
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});










