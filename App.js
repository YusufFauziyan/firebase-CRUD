import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { db } from './firebase';
import { 
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'

export default function App() {
  const [title, setTtitle] = useState()
  const [desc, setDesc] = useState()
  const [del, setDel] = useState()

  //collection ref
  const colRef = collection(db, 'todo')

  // get collection data
  getDocs(colRef)
    .then((snapshot) => {
      let todos = []
      snapshot.docs.forEach((doc) => {
        todos.push({...doc.data(), id: doc.id})
      })
      console.log(todos);
    })
    .catch(err => {
      console.log(err.message);
    })

    //add data
    const handleSubmit =() => {
      addDoc(colRef, {
        title: title,
        desc: desc
      })
      .then(() => {
        setTtitle('')
        setDesc('')
      })

    }

    const handleDelete =() => {
      const docRef = doc(db, 'todo', del)

      deleteDoc(docRef)
      .then(()=>{
        setDel('')
      })
    }




  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View>
        <TextInput  placeholder='title' style={{
          border: '1px solid black', 
          padding: 10,
          borderRadius: 8,
          marginVertical: 20}}
          value= {title}
          onChangeText={text => setTtitle(text)}
          />
        <TextInput  placeholder='desc' style={{
          border: '1px solid black', 
          padding: 10,
          borderRadius: 8}}
          value= {desc}
          onChangeText={text => setDesc(text)}
        />

        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>Submit</TouchableOpacity>
      </View>
      <View>
        <TextInput  placeholder='delete id' style={{
          border: '1px solid black', 
          padding: 10,
          borderRadius: 8,
          marginVertical: 20}}
          value= {del}
          onChangeText={text => setDel(text)}
          />
          <TouchableOpacity style={styles.submit} onPress={handleDelete}>Delete</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    padding: 10,
    backgroundColor: '#212121',
    marginTop: 15,
    color: 'white',
    borderRadius: 10
  }
});
