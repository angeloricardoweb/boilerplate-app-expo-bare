import { View, Text } from 'react-native'
import React from 'react'
import { typography } from '../../styles/globalStyles'

export default function TitleStronger({ children }: { children: React.ReactNode }) {
    return (
        <Text style={[typography.h1, { fontWeight: '600' }]}>{children}</Text>
    )
}