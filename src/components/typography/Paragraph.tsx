import { View, Text } from 'react-native'
import React from 'react'
import { typography } from '../../styles/globalStyles'

export default function Paragraph({ children, align }: { children: React.ReactNode; align?: "left" | "center" | "right" }) {
    return (
        <Text style={[typography.paragraph, {
            textAlign: align ? align : "left"
        }]}>{children}</Text>
    )
}