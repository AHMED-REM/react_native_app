import React, { use, useEffect, useState } from "react";
import { View, Text, ScrollView, Button, Alert, StyleSheet } from "react-native";
import Header from './Header';
import UserCard from './UserCard';
import axios from "axios";

export default function ScreenDashboard() {

  const [users, setUsers] = useState([]);
  const user = { username: 'root', email: 'root@gmail.com' }

  useEffect(() => {
    axios.get("http://192.168.11.120:3000/users")
      .then(res => setUsers(res.data))
      .catch(err => {
        Alert.alert(JSON.stringify(err.response ? err.response.data : err.message));
        console.error(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://192.168.11.120:3000/delete_user/" + id)
      .then(res => {
        Alert.alert(res.data.message);
        setUsers(users.filter(u => u.id_user !== id));
      })
      .catch(err => {
        Alert.alert(JSON.stringify(err.response ? err.response.data : err.message));
        console.error(err);
      });
  };

  return (
    <View style={styles.container}>
      <Header user={user} />
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {users.map(user => (
          <UserCard key={user.id_user} user={user} onDelete={handleDelete} />
        ))}
      </ScrollView>
    </View >
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});










