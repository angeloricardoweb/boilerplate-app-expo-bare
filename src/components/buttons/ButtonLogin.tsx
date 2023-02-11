import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ButtonProtocol } from './protocols'

export default function ButtonLogin({ children, handler }: ButtonProtocol) {
    return (
        <TouchableOpacity style={[styles.container, styles.login]} onPress={handler}>
            <Text style={styles.textWite}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

