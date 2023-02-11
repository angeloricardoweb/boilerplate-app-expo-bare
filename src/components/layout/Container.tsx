import { View, Text } from 'react-native'
import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            {children}
        </View>
    )
}