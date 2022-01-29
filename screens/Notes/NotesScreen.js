import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import noteContext from '../../context/NoteContext'
import NotesItem from './NotesItem'

export default function NotesScreen() {
    
    const context = useContext(noteContext)
    const { notes, getNotes, addNote } = context;

    useEffect(() => {
        getNotes();
    }, [])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleAddNote = () => {
        addNote(title, description);
        setTitle("");
        setDescription("");
    }




    return (
        <ScrollView>
            <View style={styles.notesTop}></View>

            <View>
                <Text style={styles.title}>Add Title</Text>
                <TextInput style={styles.titleTextInput} placeholder='Enter your Title here' value={title} onChangeText={(title) => { setTitle(title) }} />
            </View>

            <View>
                <Text style={styles.description}>Add Description</Text>
                <TextInput style={styles.descriptionTextInput} placeholder='Enter your description here' multiline={true} value={description} onChangeText={(description) => { setDescription(description) }} />
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={handleAddNote}>
                    <LinearGradient style={styles.addNote} colors={['#08d4c4', '#01ab9d']} >
                        <Text style={styles.addNoteText}>Add Note</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View><Text style={styles.notesHead}>Your Notes</Text></View>

            <ScrollView style={styles.notesItem}>
                {notes.map((note) => {
                    return (
                        <NotesItem key={note._id} title={note.title} description={note.description} />
                    )
                })}
            </ScrollView>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    notesTop: {
        height: 50,
        width: 400,
        backgroundColor: '#009378'
    },

    title: {
        marginHorizontal: 15,
        marginTop: 35,
        color: '#009378',
        fontSize: 18,
        fontWeight: 'bold'
    },

    titleTextInput: {
        marginHorizontal: 12,
        marginTop: 10,
        paddingHorizontal: 10,
        height: 45,
        borderColor: '#009378',
        borderWidth: 1,
        borderRadius: 12,
        color: 'black'
    },

    description: {
        marginHorizontal: 15,
        marginTop: 12,
        color: '#009378',
        fontSize: 18,
        fontWeight: 'bold'
    },

    descriptionTextInput: {
        marginHorizontal: 12,
        marginTop: 10,
        paddingHorizontal: 10,
        height: 125,
        borderColor: '#009378',
        borderWidth: 1,
        borderRadius: 12,
        textAlignVertical: 'top'
    },

    button: {
        marginTop: 22,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    addNote: {
        width: 335,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },

    addNoteText: {
        color: 'white',
        fontWeight: 'bold'
    },

    notesHead: {
        marginTop: 30,
        marginHorizontal: 12,
        color: '#009378',
        fontWeight: 'bold',
        fontSize: 30
    },


    notesItem: {
        marginHorizontal: 12,
        marginTop: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        height: '100%',


    }
})