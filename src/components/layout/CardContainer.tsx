import React from 'react'
import { View } from 'react-native'
import { colors } from '../../styles/colors'

export default function CardContainer({ children }: {
    children: React.ReactNode
}) {
    return (
        <View
            style={{
                backgroundColor: colors.ice,
                borderRadius: 10,
                padding: 20,
                // elevation: 1,
                // shadowColor: "#000",
                // shadowOffset: {
                //     width: 0,
                //     height: 2,
                // },
                // shadowOpacity: 0.25,
                // shadowRadius: 3.84,
                marginTop: 8
            }}
        >{children}</View>
    )
}
