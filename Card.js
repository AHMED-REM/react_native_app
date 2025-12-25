import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Card() {
    return (
        <View style={styles.cardcontainer}>

            <Image
                style={styles.imguser}
                source={require('./assets/img_user.jpg')}
            />

            <View style={styles.infoscontainer}>

                <Text style={styles.txtname}>Ali</Text>
                <Text style={styles.txtemail}>ALi@gmail.com</Text>
                <Text style={styles.txtdob}>01/01/1999</Text>

                <View style={styles.btncontainer}>
                    <TouchableOpacity style={[styles.btn, styles.update]}>
                        <Text style={styles.btnText}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.delete]}>
                        <Text style={styles.btnText}>Delete</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    cardcontainer: {
        flexDirection: "row",
        backgroundColor: "#d2d2d2ff",
        borderRadius: 16,
        padding: 16,
        alignItems: "center",
        margin: 16,
        elevation: 3,
    },
    imguser: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 16,
    },
    infoscontainer: {
        flex: 1,
    },
    txtname: {
        fontSize: 18,
        fontWeight: "bold",
    },
    txtemail: {
        color: "#555",
    },
    txtdob: {
        color: "#777",
        marginBottom: 10,
    },
    btncontainer: {
        flexDirection: "row",
    },
    btn: {
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 8,
        marginRight: 10,
    },
    update: {
        backgroundColor: "#3b82f6",
    },
    delete: {
        backgroundColor: "#ef4444",
    },
    btnText: {
        color: "#fff",
        fontWeight: "600",
    },
});
