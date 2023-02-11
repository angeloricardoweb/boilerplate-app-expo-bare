import { View, Text } from 'react-native'
import React from 'react'
import { typography } from '../../styles/globalStyles'

export default function H1({ children }: { children: React.ReactNode }) {
    return (
        <Text style={typography.h1}>{children}</Text>
    )
}