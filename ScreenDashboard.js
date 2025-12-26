import { StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from './Header';
import Card from './Card';

export default function ScreenDashboard() {

  const route = useRoute()
  const { data1, data2 } = route.params || {}

  return (
    <View style={styles.container}>
      <Header username={data1} email={data2} />
      <Card />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});










