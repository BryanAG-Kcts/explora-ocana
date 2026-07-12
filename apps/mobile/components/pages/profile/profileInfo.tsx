import type React from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from '@/components/ui/text'
import { ACCOUNT_DATA } from '@/constants/pages/profile/profile'

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

export function ProfileInfo() {
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
            <InfoItem label='Nombres' value={ACCOUNT_DATA.name} />
            <InfoItem label='Apellidos' value={ACCOUNT_DATA.lastName} />

            <View className='flex-row justify-between'>
              <View className='flex-1 mr-2'>
                <InfoItem
                  label='Tipo de Documento'
                  value={ACCOUNT_DATA.documentType}
                />
              </View>
              <View className='flex-1 ml-2'>
                <InfoItem label='Número' value={ACCOUNT_DATA.document} />
              </View>
            </View>

            <View className='flex-row justify-between'>
              <View className='flex-1 mr-2'>
                <InfoItem
                  label='Fecha de Nacimiento'
                  value={ACCOUNT_DATA.birthdate}
                />
              </View>
              <View className='flex-1 ml-2'>
                <InfoItem label='Género' value={ACCOUNT_DATA.gender} />
              </View>
            </View>
          </SectionCard>

          <SectionCard title='Contacto y Ubicación'>
            <InfoItem label='Correo Electrónico' value={ACCOUNT_DATA.email} />

            <View className='flex-row justify-between'>
              <View className='w-1/3 mr-2'>
                <InfoItem label='Ext.' value={ACCOUNT_DATA.phoneExtension} />
              </View>
              <View className='w-2/3 ml-2'>
                <InfoItem
                  label='Teléfono / Celular'
                  value={ACCOUNT_DATA.phone}
                />
              </View>
            </View>

            <View className='flex-row justify-between'>
              <View className='flex-1 mr-2'>
                <InfoItem label='País' value={ACCOUNT_DATA.country} />
              </View>
              <View className='flex-1 ml-2'>
                <InfoItem
                  label='Departamento'
                  value={ACCOUNT_DATA.department}
                />
              </View>
            </View>

            <View className='flex-row justify-between'>
              <View className='flex-1 mr-2'>
                <InfoItem label='Ciudad' value={ACCOUNT_DATA.city} />
              </View>
              <View className='flex-1 ml-2'>
                <InfoItem label='Barrio' value={ACCOUNT_DATA.neighborhood} />
              </View>
            </View>

            <InfoItem label='Comuna' value={ACCOUNT_DATA.commune} />
          </SectionCard>

          <SectionCard title='Perfil Académico'>
            <InfoItem label='Rol en la plataforma' value={ACCOUNT_DATA.role} />
            <InfoItem
              label='Institución Educativa'
              value={ACCOUNT_DATA.school}
            />
            <InfoItem
              label='Nivel Educativo'
              value={ACCOUNT_DATA.schoolLevel}
            />
          </SectionCard>

          <SectionCard title='Información Adicional'>
            <InfoItem label='Grupo Étnico' value={ACCOUNT_DATA.ethnicGroup} />
            <InfoItem
              label='Víctima del Conflicto Armado'
              value={ACCOUNT_DATA.armedConflict}
            />
          </SectionCard>
        </ScrollView>
      </View>
    </View>
  )
}
