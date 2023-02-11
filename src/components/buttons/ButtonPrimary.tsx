import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ButtonProtocol } from './protocols';

export default function ButtonPrimary({ children, handler }: ButtonProtocol) {
    return (
        <TouchableOpacity style={[styles.container, styles.primary]} onPress={handler}>
            <Text style={styles.textWite}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}
