import { View, Text } from 'react-native'
import React from 'react'
import { typography } from '../../styles/globalStyles'

export default function H2({ children, align }: { children: React.ReactNode; align?: "left" | "center" | "right" }) {
    return (
        <Text style={[typography.h2, {
            textAlign: align ? align : "left"
        }]}>{children}</Text>
    )
}