import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ButtonProtocol } from './protocols';
import { colors } from '../../styles/colors';

export default function ButtonSecondary({ children, handler }: ButtonProtocol) {
    return (
        <TouchableOpacity style={[styles.container, styles.secondary]} onPress={handler}>
            <Text style={{ color: colors.primary, fontWeight: '700' }}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}
