import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

export default function InfoContainer({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.container} >

            <View style={styles.content}>
                {children}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    headerWraper: {
        position: 'relative',
        zIndex: 1,

    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        justifyContent: 'space-between',
    }
})
