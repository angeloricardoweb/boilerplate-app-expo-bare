import { View, Text, Touchable, TouchableOpacity, Button } from 'react-native'
import React, { useCallback } from 'react'
import Container from '../../../components/layout/Container'
import H2 from '../../../components/typography/H2'
import { useGlobal } from '../../../context/GlobalContextProvider'
import ButtonPix from '../../../components/pix-buttons/ButtonPix'
import { RegiteredkeysListMock, UnregiteredkeysListMock } from '../../../mocks/keysList'
import NoKeysRegistered from '../partials/NoKeysRegistered'
import { useNavigate } from '../../../hooks/useNavigate'

export default function MyPixKeys() {
  const { userData } = useGlobal()
  const { navigate } = useNavigate();

  const goToPixKeyAdd = useCallback((type: string) => {
    console.log('navigate to ' + type + ' register key');
    navigate('PixKeyAdd', { type })
  }, [])


  return (
    <View>
      <Container>
        <H2>Chaves encontradas</H2>
        {
          !userData.hasKeysRegistered ?
            (
              <NoKeysRegistered />
            ) : (
              <View style={{ marginTop: 16 }}>
                {
                  RegiteredkeysListMock.map((item, index) => {
                    return (
                      <ButtonPix
                        key={index}
                        id={item.id}
                        handler={() => navigate('PixKeyOptions', {
                          id: item.id,
                        })}
                        type={item.type as any}
                        registered={item.registered}
                      />
                    )
                  })
                }
              </View>
            )

        }
        <View style={{ marginTop: 32 }}>
          <H2>Cadastrar chavex Pix</H2>
          <View style={{ marginTop: 16 }}>
            {
              UnregiteredkeysListMock.map((item, index) => {
                return (
                  <ButtonPix
                    key={index}
                    id={item.id}
                    handler={() => goToPixKeyAdd(item.type)}
                    type={item.type as any}
                    registered={item.registered}
                  />
                )
              })
            }
          </View>
        </View>
      </Container>
    </View>
  )
}
