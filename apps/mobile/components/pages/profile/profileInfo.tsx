import type React from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from '@/components/ui/text'
import type { User } from '@/hooks/userStore'

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <View className='mb-4'>
    <Text className='text-sm font-medium text-muted-foreground mb-1'>
      {label}
    </Text>
    <Text className='text-base font-semibold'>{value}</Text>
  </View>
)

const SectionCard = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => (
  <View className='bg-background p-5 rounded-2xl border border-border shadow-sm mb-5'>
    <Text className='text-lg font-bold mb-4 pb-2 border-b border-border'>
      {title}
    </Text>
    {children}
  </View>
)

interface Props {
  user: User
}
export function ProfileInfo({ user }: Props) {
  return (
    <View className='flex-1 justify-end'>
      <View className='flex-1 bg-card max-h-2/3 rounded-3xl shadow-lg border border-border overflow-hidden'>
        <View className='p-4 pt-6 bg-background border-b border-border'>
          <Text className='text-2xl font-bold mb-1'>Información de Cuenta</Text>
          <Text variant='muted'>Tus datos registrados en la plataforma.</Text>
        </View>

        <ScrollView
          className='flex-1 px-4 pt-6'
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <SectionCard title='Identificación y Datos Personales'>
            <InfoItem label='Nombres' value={user.name} />
            <InfoItem label='Apellidos' value={user.lastName} />

            <View className='flex-row justify-between'>
              <View className='flex-1 mr-2'>
                <InfoItem label='Tipo de Documento' value={user.documentType} />
              </View>
              <View className='flex-1 ml-2'>
                <InfoItem label='Número' value={user.document} />
              </View>
            </View>

            <View className='flex-row justify-between'>
              <View className='flex-1 mr-2'>
                <InfoItem
                  label='Fecha de Nacimiento'
                  value={new Date(user.birthdate).toLocaleDateString()}
                />
              </View>
              <View className='flex-1 ml-2'>
                <InfoItem label='Género' value={user.gender} />
              </View>
            </View>
          </SectionCard>

          <SectionCard title='Contacto y Ubicación'>
            <InfoItem label='Correo Electrónico' value={user.email} />

            <View className='flex-row justify-between'>
              <View className='w-1/3 mr-2'>
                <InfoItem label='Ext.' value='57' />
              </View>
              <View className='w-2/3 ml-2'>
                <InfoItem label='Teléfono / Celular' value={user.phone} />
              </View>
            </View>

            <View className='flex-row justify-between'>
              <View className='flex-1 mr-2'>
                <InfoItem label='País' value={user.country} />
              </View>
              <View className='flex-1 ml-2'>
                <InfoItem
                  label='Departamento'
                  value={user.department || 'No especificado'}
                />
              </View>
            </View>

            <View className='flex-row justify-between'>
              <View className='flex-1 mr-2'>
                <InfoItem
                  label='Ciudad'
                  value={user.city || 'No especificado'}
                />
              </View>
              <View className='flex-1 ml-2'>
                <InfoItem
                  label='Barrio'
                  value={user.neighborhood || 'No especificado'}
                />
              </View>
            </View>

            <InfoItem
              label='Comuna'
              value={user.commune || 'No especificado'}
            />
          </SectionCard>

          <SectionCard title='Perfil Académico'>
            <InfoItem label='Rol en la plataforma' value={user.role} />
            <InfoItem label='Institución Educativa' value={user.school} />
            <InfoItem label='Nivel Educativo' value={user.educationLevel} />
          </SectionCard>

          <SectionCard title='Información Adicional'>
            <InfoItem label='Grupo Étnico' value={user.ethnicGroup} />
            <InfoItem
              label='Víctima del Conflicto Armado'
              value={user.armedConflict ? 'Sí' : 'No'}
            />
          </SectionCard>
        </ScrollView>
      </View>
    </View>
  )
}
