```jsx
<TextInput
  style={formStyles.compactInput}
  onChangeText={(text) => onChangeText(convertToCurrencyBrValue(text))}
  value={value}
  keyboardType="numeric"
  placeholder="0,00"
  placeholderTextColor={colors.primaryBlack}
/>
```

```jsx
<TextInput
  style={formStyles.compactInput}
  keyboardType="numeric"
  onChangeText={(text) => onChangeUser(convertToCNPJ(text))}
  placeholder="CNPJ"
  maxLength={18}
  value={user}
  placeholderTextColor={colors.primaryBlack}
/>
```

```jsx
const response = await api_contract.post(
  '/pix/recebimento/confirmacao-qr-code',
  {
    chave_id: keyId,
    valor: value ? convertToRawCurrency(value) : null,
    identificador: description ? description : '',
  }
);
```
