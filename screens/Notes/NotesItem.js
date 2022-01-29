import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function NotesItem(props) {
    
    return (
        <View style={styles.notesItem}>
            <Text style={styles.title}>{props.title}</Text>
            <ScrollView><Text style={styles.description}>{props.description}</Text></ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    notesItem: {
        marginTop: 10,
        marginBottom: 10,
        height: 150,
        borderColor: '#009378',
        borderWidth: 2,
        borderRadius: 20,
    },

    title: {
        marginHorizontal: 12,
        marginTop: 6,
        color: 'black',
        fontSize: 22
    },

    description: {
        marginHorizontal: 12,
        marginBottom: 5,
        fontSize: 15,
        color: 'black',
    }
})