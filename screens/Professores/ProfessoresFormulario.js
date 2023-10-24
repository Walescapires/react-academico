import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const ProfessoresFormulario = ({navigation}) => {
  const [dados, setDados] = useState({})

  function handelChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  function salvar(){
    AsyncStorage.getItem('professores').then(resultado => {

      const professores = JSON.parse(resultado) || []

      professores.push(dados)
      console.log(professores)
  
      AsyncStorage.setItem('professores', JSON.stringify(professores))
  
      navigation.goBack()
    })
  }
  return (
    <>
    <ScrollView style={{ margin: 15 }}>
      <Text style={{ textAlign: 'center' }}>Formulário do Professor</Text>

      <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Nome'
          value={dados.nome}
          onChangeText={(valor) => handelChange(valor, 'nome')}
        />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='CPF'
          value={dados.cpf}
          keyboardType='decimal-pad'
          onChangeText={(valor) => handelChange(valor, 'CPF')}
        />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Matricula'
          value={dados.matricula}
          keyboardType='numeric'
          onChangeText={(valor) => handelChange(valor, 'matricula')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Email'
          value={dados.email}
          keyboardType='email-address'
          onChangeText={(valor) => handelChange(valor, 'email')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Telefone'
          value={dados.telefone}
          keyboardType='phone-pad'
          onChangeText={(valor) => handelChange(valor, 'telefone')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='CEP'
          value={dados.cep}
          keyboardType='numeric'
          onChangeText={(valor) => handelChange(valor, 'CEP')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Logradouro'
          value={dados.logradouro}
          onChangeText={(valor) => handelChange(valor, 'logradouro')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Complemento'
          value={dados.complemento}
          onChangeText={(valor) => handelChange(valor, 'complemento')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Número'
          value={dados.numero}
          keyboardType='numeric'
          onChangeText={(valor) => handelChange(valor, 'numero')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Bairro'
          value={dados.bairro}
          onChangeText={(valor) => handelChange(valor, 'bairro')}
        />
        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Salário'
          value={dados.salario}
          keyboardType='decimal-pad'
          onChangeText={(valor) => handelChange(valor, 'salario')}
        />

      <Button onPress={salvar}>Salvar</Button>

    </ScrollView>
  </>
  )
}

export default ProfessoresFormulario