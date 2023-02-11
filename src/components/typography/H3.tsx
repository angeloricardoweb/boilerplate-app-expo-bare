import { View, Text } from 'react-native'
import React from 'react'
import { typography } from '../../styles/globalStyles'

export default function H3({ children }: { children: React.ReactNode }) {
    return (
        <Text style={typography.h3}>{children}</Text>
    )
}