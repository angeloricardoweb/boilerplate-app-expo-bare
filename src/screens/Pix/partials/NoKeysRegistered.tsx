import { View, Text } from 'react-native'
import React from 'react'
import Paragraph from '../../../components/typography/Paragraph'
import H3 from '../../../components/typography/H3'

export default function NoKeysRegistered() {
    return (
        <View>
            <H3>Nenhuma chave cadastrada</H3>
            <Paragraph>O registro da chave é necessário para receber um Pix de forma prática. </Paragraph>
            <Paragraph>{`É possível registrar quatro tipos de chave:\n- seu número de telefone celular;\n- seu CPF/CNPJ;\n- seu endereço de e-mail.\n- Chave aleatória\nCadastre uma através do botão “Cadastrar nova Chave”.`}
            </Paragraph>
        </View>
    )
}
