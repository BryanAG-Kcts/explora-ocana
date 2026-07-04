import React, { useRef, useState } from 'react'
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { axiosInstance } from '@/constants/global/axios'
import { Text } from '../ui/text'
import axios from 'axios'

export default function AIChat() {
  const [inputText, setInputText] = useState('')
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: '¡Hola! Soy tu asistente de IA. ¿En qué te ayudo hoy?',
      sender: 'ai'
    }
  ])

  // Referencia para hacer scroll automático al último mensaje
  const flatListRef = useRef(null)

  const sendMessage = async () => {
    if (inputText.trim() === '') return

    // 1. Agregar el mensaje del usuario
    const newUserMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user'
    }

    setMessages(prevMessages => [...prevMessages, newUserMessage])
    setInputText('')

    console.log(await fetch('http://localhost:3000/api/assets/pdfs/a.pdf'))
    // 2. Simular que la IA está "pensando" y responde "hola" después de 1 segundo
    const response = await axiosInstance.post('/api/rag/ask', {
      question: inputText
    })

    const newAIMessage = {
      id: (Date.now() + 1).toString(),
      text: response.data.answer,
      sender: 'ai'
    }

    setMessages(prevMessages => [...prevMessages, newAIMessage])
  }

  const renderMessage = ({ item }) => {
    const isUser = item.sender === 'user'

    return (
      <View
        className={`w-full flex-row my-1 ${isUser ? 'justify-end' : 'justify-start'}`}
      >
        <View
          className={`max-w-[80%] px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-primary rounded-tr-sm'
              : 'border border-primary/40 rounded-tl-sm'
          }`}
        >
          {!isUser && (
            <Text className='text-primary text-[10px] font-bold mb-1 uppercase tracking-widest'>
              Bot 🤖
            </Text>
          )}
          <Text className={`${isUser ? '' : ''} text-base`}>{item.text}</Text>
        </View>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1'
      enabled
    >
      {/* Cabecera */}
      <View className='pt-14 pb-4 px-4 border-b border-primary flex-row items-center'>
        <View className='w-10 h-10 rounded-full bg-primary/20 items-center justify-center mr-3 border border-primary/50'>
          <Text className='text-xl'>👾</Text>
        </View>
        <View>
          <Text className='font-bold text-lg'>Asistente IA</Text>
          <Text className='text-primary text-xs font-medium flex-row items-center'>
            ● En línea
          </Text>
        </View>
      </View>

      {/* Área de Mensajes */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        className='flex-1 px-4 pt-4'
        contentContainerStyle={{ paddingBottom: 20 }}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
        onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      {/* Input de Texto */}
      <View className='px-4 py-3'>
        <View className='flex-row items-center rounded-full border border-gray-700/50 pl-4 pr-1 py-1'>
          <TextInput
            className='flex-1 text-base py-2 h-12 text-foreground'
            placeholder='Escribe un mensaje...'
            placeholderTextColor='#6B7280'
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={sendMessage}
          />

          <TouchableOpacity
            onPress={sendMessage}
            className={`w-10 h-10 rounded-full items-center justify-center ml-2 ${
              inputText.trim() ? 'bg-primary' : 'bg-primary/50'
            }`}
            disabled={!inputText.trim()}
          >
            <Text className='text-white font-black text-lg'>↑</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
