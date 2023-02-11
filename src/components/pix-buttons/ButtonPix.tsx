import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons';
import DynamicPixIcon from '../partials/DynamicPixIcon';
import { IPixType } from '../../protocols/IPixType';

interface ButtonPixProps {
  type: IPixType;
  handler: () => void;
  registered: boolean;
  id: string;
}

export default function ButtonPix({ type, handler, id, registered }: ButtonPixProps) {
  const [icon, setIcon] = useState<any>("");
  const [name, setName] = useState<any>("");

  useEffect(() => {
    switch (type) {
      case "cpf":
        setIcon("person");
        setName("CPF");
        break;
      case "cnpj":
        setIcon("business");
        setName("CNPJ");
        break;
      case "email":
        setIcon("mail");
        setName("E-mail");
        break;
      case "telefone":
        setIcon("call");
        setName("Telefone");
        break;
      case "aleatorio":
        setIcon("key");
        setName("Aleatório");
        break;
    }

  }, [])

  return (
    <TouchableOpacity onPress={handler} style={styles.container}>
      <DynamicPixIcon active={registered} icon={icon} />
      <View style={styles.typeWrapper}>
        <Text style={styles.type}>
          {name}
        </Text>
      </View>
      {
        registered ? (
          <Ionicons name="arrow-forward-circle-sharp" style={styles.iconForward} />
        ) : (
          <Text style={styles.title}>Cadastrar</Text>
        )
      }
    </TouchableOpacity>
  )
}


