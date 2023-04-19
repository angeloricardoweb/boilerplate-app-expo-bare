# Template Expo Bare Work Flow

## Rodar Projeto
```
yarn
```

```
npx expo start
```

### Android:

```
npx react-native run-android
```

### IOS: 
```
npx expo run-ios
```

## Deploy do Projeto

### Andoid:
Obs: não esqueça de atualizar o número de versão no `app.json` tanto para `versionCode` e `version`.

Para gerar o `.aab`:
```
eas build -p android
```

ou

Gerar `.apk`:

```
eas build -p android --profile preview
```

### IOS:
