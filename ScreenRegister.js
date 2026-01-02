import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react';
import axios from "axios";

export default function ScreenRegister() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [birthdate, setbirthdate] = useState('')

    const [msg1, setMsg1] = useState('')
    const [msg2, setMsg2] = useState('')
    const [msg3, setMsg3] = useState('')
    const [msg4, setMsg4] = useState('')


    const navigation = useNavigation()

    useEffect(() => {
        if (username.length > 0) {
            (username.match('[A-Z]')) ?
                setMsg1('')
                :
                setMsg1("username doit avoir au moin un char MAJ !")
        }
        else {
            setMsg1('')
        }
    }, [username])


    useEffect(() => {
        (password.length > 0 && password.length < 8) ?
            setMsg2("password doit avoir au moin 8 chars !")
            :
            setMsg2('')
    }, [password])


    useEffect(() => {
        if (email.length > 0) {
            (email.includes('@gmail.com')) ?
                setMsg3('')
                :
                setMsg3('email doit contenir @gmail.com !')
        }
        else {
            setMsg3('')
        }
    }, [email])


    useEffect(() => {
        if (birthdate.length > 0) {
            (birthdate.match(/^\d{2}\/\d{2}\/\d{4}$/)) ?
                setMsg4('')
                :
                setMsg4('date doit être dd/mm/yyyy !')
        }
        else {
            setMsg4('')
        }
    }, [birthdate])

    const handle_register_db = () => {
        if (username !== '' && password !== '' && email !== '' && birthdate !== '') {
            axios.post("http://192.168.110.247:3000/newuser", { username, password, email, birthdate })
                .then(res => {
                    const response = res.data;
                    if (response.message === "User added") {
                        Alert.alert("Account created successfully ! Id: " + response.id);
                        navigation.navigate("ScreenLogin");
                    } else {
                        Alert.alert("A problem occurred when registering !");
                    }
                })
                .catch(err => {
                    Alert.alert(JSON.stringify(err.response ? err.response.data : err.message));
                    console.error(err);
                });
        } else {
            Alert.alert("You must fill the form!");
        }
    };

    const handle_register = () => {
        if (msg1.length == 0 && username.length > 0
            && msg2.length == 0 && password.length > 0
            && msg3.length == 0 && email.length > 0
            && msg4.length == 0 && birthdate.length > 0
        ) {
            navigation.navigate("ScreenLogin", {
                data1: username,
                data2: password,
            })
        }
        else {
            Alert.alert('check your infromations !')
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

                <Text style={{ color: "red" }}>{msg1}</Text>

                <TextInput
                    style={styles.txtinpt}
                    placeholder='Password'
                    value={password}
                    onChangeText={setpassword} />

                <Text style={{ color: "red" }}>{msg2}</Text>

                <TextInput
                    style={styles.txtinpt}
                    placeholder='Email'
                    value={email}
                    onChangeText={setemail} />

                <Text style={{ color: "red" }}>{msg3}</Text>

                <TextInput
                    style={styles.txtinpt}
                    placeholder='Birthdate'
                    value={birthdate}
                    onChangeText={setbirthdate} />

                <Text style={{ color: "red" }}>{msg4}</Text>

                <TouchableOpacity
                    onPress={handle_register_db}
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
