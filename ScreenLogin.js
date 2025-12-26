import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { Link, useNavigation, useRoute } from '@react-navigation/native'
import { useState } from 'react';


export default function ScreenLogin() {

  const navigation = useNavigation()
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const route = useRoute()
  const { data1, data2, data3 } = route.params || {}

  const handle_login = () => {
    if (username == "" || password == "") {
      Alert.alert("Remplire tous les champs !")
    }
    else if (username == data1 && password == data2) {
      Alert.alert("Accés autorisé !")
      navigation.navigate('ScreenDashboard', {
        data1: username,
        data2: data3
      })
    }
    else {
      Alert.alert("Accés non autorisé !")
    }
  }


  return (
    <ImageBackground
      source={require('./assets/img_bg.jpg')}
      style={styles.container}>

      <View style={styles.loginpanel}>

        <Image
          source={require('./assets/img_user.jpg')}
          style={styles.imgprofile} />

        <TextInput
          style={styles.txtinpt}
          placeholder='Username'
          value={username}
          onChangeText={setusername} />

        <TextInput
          style={styles.txtinpt}
          placeholder='Password'
          secureTextEntry={true}
          value={password}
          onChangeText={setpassword} />

        <TouchableOpacity onPress={handle_login}
          style={styles.btn}>
          <Text style={styles.txtbtn}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: "80%", padding: 10, alignItems: "center", justifyContent: "center" }}>
          <Link screen="ScreenRegister" style={styles.txtlink}>Create a new Account</Link>
        </TouchableOpacity>

      </View>

    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loginpanel: {
    width: '90%',
    height: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgprofile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderBlockColor: 'black',
    borderWidth: 1,
    elevation: 2,
    shadowColor: 'black',
    marginBottom: 50
  },
  txtinpt: {
    width: '70%',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10
  },
  txtbtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
  txtlink: {
    color: 'black',
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  btn: {
    borderRadius: 5,
    backgroundColor: 'black',
    width: "70%",
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});










