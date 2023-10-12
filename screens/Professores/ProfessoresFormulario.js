import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const ProfessoresFormulario = () => {
  const [dados, setDados] = useState({})

  function handelChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  function salvar(){
    console.log
  }
  return (
    <>
    <ScrollView style={{ margin: 15 }}>
      <Text style={{ textAlign: 'center' }}>Formulário do Professor</Text>

      <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Nome'
          onChangeText={(valor) => handelChange(valor, 'nome')}
        />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='CPF'
          keyboardType='decimal-pad'
          onChangeText={(valor) => handelChange(valor, 'CPF')}
        />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Matricula'
          keyboardType='numeric'
          onChangeText={(valor) => handelChange(valor, 'matricula')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Email'
          keyboardType='email-address'
          onChangeText={(valor) => handelChange(valor, 'email')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Telefone'
          keyboardType='phone-pad'
          onChangeText={(valor) => handelChange(valor, 'telefone')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='CEP'
          keyboardType='numeric'
          onChangeText={(valor) => handelChange(valor, 'CEP')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Logradouro'
          onChangeText={(valor) => handelChange(valor, 'logradouro')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Complemento'
          onChangeText={(valor) => handelChange(valor, 'complemento')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Numero'
          keyboardType='numeric'
          onChangeText={(valor) => handelChange(valor, 'numero')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Bairro'
          onChangeText={(valor) => handelChange(valor, 'bairro')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Salário'
          keyboardType='decimal-pad'
          onChangeText={(valor) => handelChange(valor, 'salario')}
        />

      <Button onPress={salvar}>Salvar</Button>

    </ScrollView>
  </>
  )
}

export default ProfessoresFormulario