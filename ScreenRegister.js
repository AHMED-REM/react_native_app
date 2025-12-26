import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react';


export default function ScreenRegister() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [birthdate, setbirthdate] = useState('')

    const navigation = useNavigation()


    useEffect(() => {
        (password.length >= 8) ?
            console.log("password valide :)")
            :
            console.log("password non valide :(")
    }, [password])

    useEffect(() => {
        (email.includes('@gmail.com')) ?
            console.log("email valide :)")
            :
            console.log("email non valide :(")
    }, [email])


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
                    value={password}
                    onChangeText={setpassword} />

                <TextInput
                    style={styles.txtinpt}
                    placeholder='Email'
                    value={email}
                    onChangeText={setemail} />

                <TextInput
                    style={styles.txtinpt}
                    placeholder='Birthdate'
                    value={birthdate}
                    onChangeText={setbirthdate} />

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("ScreenLogin", {
                            data1: username,
                            data2: password
                        })
                    }}
                    style={styles.btn}>
                    <Text style={styles.txtbtn}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ width: "70%", padding: 10, alignItems: "center", justifyContent: "center" }}>
                    <Link screen="ScreenLogin" style={styles.txtlink}>Go to Login</Link>
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
