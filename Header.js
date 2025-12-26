import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Header(props) {

    return (
        <View style={styles.headercontainer}>

            <Image
                style={styles.imguser}
                source={require('./assets/img_user.jpg')}
            />

            <View style={styles.infoscontainer}>
                <Text style={styles.txtname}>{props.username}</Text>
                <Text style={styles.txtemail}>{props.email}</Text>
            </View>

            <TouchableOpacity onPress={() => { }}>
                <Image
                    style={styles.imgmenu}
                    source={require('./assets/menu_open.png')}
                />
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    headercontainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 40,
        width: "100%",
        height: 140,
        backgroundColor: "black",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        elevation: 4,
        shadowColor: 'black',
    },
    imguser: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderBlockColor: 'black',
        borderWidth: 1,
        elevation: 2,
        shadowColor: 'black',
    },
    infoscontainer: {
        alignItems: "center",
        flexDirection: "column",
    },
    txtname: {
        fontSize: 20,
        color: "white"
    },
    txtemail: {
        fontSize: 14,
        color: "white"
    },
    imgmenu: {
        height: 40,
        width: 40,
    },
});
