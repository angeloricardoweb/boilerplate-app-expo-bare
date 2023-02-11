import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import HeaderPage from '../header'

export default function InfoContainer({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.container} >
            <View style={styles.headerWraper}>
                <HeaderPage />
            </View>
            <View style={styles.overlap}>
            </View>
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
    overlap: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000',
        zIndex: 2,
        opacity: 0.5
    },
    content: {
        flex: 1,
        zIndex: 3,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 44,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 8,
        padding: 20,
        justifyContent: 'space-between',
    }
})