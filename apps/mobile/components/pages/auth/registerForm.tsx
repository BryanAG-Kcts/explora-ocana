import { zodResolver } from '@hookform/resolvers/zod'
import {
  Calendar,
  IdCard,
  Key,
  Mail,
  Phone,
  Plus,
  User
} from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { FormInput } from '@/components/global/formInput'
import { FormSelect } from '@/components/global/formSelect'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { axiosInstance, safePromise } from '@/constants/global/axios'
import {
  ARMED_CONFLICT,
  COLOMBIA_COUNTRY_VALUE,
  DEFAULT_OBJECT_SELECT,
  type FormValues,
  filterCities,
  filterNeighborhoods,
  GENDERS,
  type Municipalities,
  type Neighborhoods,
  OCANA_VALUE,
  RegisterSchema,
  type RegisterSchemaType,
  ROLES
} from '@/constants/pages/auth/register'
import { i18n } from '@/locales/i18n'

export function RegisterForm() {
  const [formValues, setFormValues] = useState<FormValues | null>(null)
  const [filteredCities, setFilteredCities] = useState<Municipalities[]>([])
  const [filteredNeigh, setFilteredNeigh] = useState<Neighborhoods[]>([])
  const { control, handleSubmit, watch, setValue } =
    useForm<RegisterSchemaType>({
      resolver: zodResolver(RegisterSchema)
    })

  useEffect(() => {
    ;(async () => {
      const res = axiosInstance.get<FormValues>('/data/register')
      const [response, error] = await safePromise(res)
      if (error || !response) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Ocurrió un error al obtener la información requerida'
        })

        return
      }

      setFormValues(response.data)
    })()
  }, [])

  if (!formValues) {
    return (
      <View className='flex-1 items-center py-7'>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  const onSubmit: SubmitHandler<RegisterSchemaType> = async data => {
    if (
      data.country.value === COLOMBIA_COUNTRY_VALUE &&
      data.department?.value === ''
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Debes escoger un departamento'
      })

      return
    }

    if (data.city?.value === OCANA_VALUE && data.commune?.value === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Debes escoger una comuna'
      })

      return
    }

    const res = axiosInstance.post('/auth/register', {
      ...data,
      armedConflict: data.armedConflict.value === 'Y',
      ethnicGroup: data.ethnicGroup.value,
      country: data.country.value,
      department: data.department?.value,
      city: data.city?.value,
      commune: data.commune?.value,
      neighborhood: data.neighborhood?.value,
      role: data.role.value,
      school: data.school.value,
      schoolLevel: data.schoolLevel.value,
      documentType: data.documentType.value,
      gender: data.gender.value,
      phone: data.phone.replaceAll('-', '')
    })

    const [_, error] = await safePromise(res)
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:
          'Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo más tarde.'
      })

      return
    }

    Toast.show({
      type: 'success',
      text1: 'Felicidades 🎉',
      text2: 'Te has registrado exitosamente'
    })
  }

  const isCountryColombia = watch('country')?.value === COLOMBIA_COUNTRY_VALUE
  const isOtherCommune = watch('commune')?.value === '7'
  const isOcana = watch('city')?.value === OCANA_VALUE
  return (
    <ScrollView className='w-full'>
      <View className='flex-1 gap-9 w-full py-5'>
        <Text variant='h3'>{i18n.t('REGISTER.PERSONAL_DATA_TITLE')}</Text>

        <View className='flex-row gap-2'>
          <Controller
            control={control}
            name='name'
            render={({ field, fieldState }) => (
              <FormInput
                label={i18n.t('REGISTER.NAME_LABEL')}
                hint={i18n.t('REGISTER.NAME_HINT')}
                value={field.value}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
                leftComponent={<Icon as={User} size={18} />}
                viewClassName='flex-1'
              />
            )}
          />

          <Controller
            control={control}
            name='lastName'
            render={({ field, fieldState }) => (
              <FormInput
                label={i18n.t('REGISTER.LAST_NAME_LABEL')}
                hint={i18n.t('REGISTER.LAST_NAME_HINT')}
                value={field.value}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
                leftComponent={<Icon as={User} size={18} />}
                viewClassName='flex-1'
              />
            )}
          />
        </View>

        <View className='flex-row gap-2 items-center'>
          <Controller
            control={control}
            name='documentType'
            defaultValue={formValues.documentTypes[0]}
            render={({ field }) => (
              <FormSelect
                data={formValues.documentTypes}
                value={field.value}
                onValueChange={field.onChange}
                label={i18n.t('REGISTER.DOCUMENT_TYPE_LABEL')}
              />
            )}
          />

          <Controller
            control={control}
            name='document'
            render={({ field, fieldState }) => (
              <FormInput
                label={i18n.t('REGISTER.DOCUMENT_LABEL')}
                hint={i18n.t('REGISTER.DOCUMENT_HINT')}
                value={field.value}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
                leftComponent={<Icon as={IdCard} size={18} />}
                viewClassName='flex-1'
              />
            )}
          />
        </View>

        <View className='flex-row gap-2 items-center'>
          <Controller
            control={control}
            name='birthdate'
            render={({ field, fieldState }) => (
              <FormInput
                label={i18n.t('REGISTER.BIRTHDATE_LABEL')}
                hint={i18n.t('REGISTER.BIRTHDATE_HINT')}
                value={field.value}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
                leftComponent={<Icon as={Calendar} size={18} />}
                viewClassName='flex-2/3'
                mask='9999/99/99'
                keyboardType='numeric'
              />
            )}
          />

          <Controller
            control={control}
            name='gender'
            defaultValue={GENDERS[0]}
            render={({ field }) => (
              <FormSelect
                data={GENDERS}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1/3'
                label={i18n.t('REGISTER.GENDER_LABEL')}
              />
            )}
          />
        </View>

        <View className='flex-row gap-2 items-center h-12'>
          <Controller
            control={control}
            name='armedConflict'
            defaultValue={ARMED_CONFLICT[0]}
            render={({ field }) => (
              <FormSelect
                data={ARMED_CONFLICT}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1'
                label={i18n.t('REGISTER.ARMED_CONFLICT_LABEL')}
              />
            )}
          />

          <Controller
            control={control}
            name='ethnicGroup'
            defaultValue={formValues.communities[0]}
            render={({ field }) => (
              <FormSelect
                data={formValues.communities}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1'
                label={i18n.t('REGISTER.ETHIC_GROUP_LABEL')}
              />
            )}
          />
        </View>

        <View className='flex-row gap-2 items-center h-12'>
          <Controller
            control={control}
            name='country'
            defaultValue={formValues.countries[0]}
            render={({ field }) => (
              <FormSelect
                data={formValues.countries}
                value={field.value}
                onValueChange={e => {
                  field.onChange(e)
                  setValue('department', DEFAULT_OBJECT_SELECT)
                  setValue('city', DEFAULT_OBJECT_SELECT)
                  setValue('commune', DEFAULT_OBJECT_SELECT)
                  setValue('neighborhood', DEFAULT_OBJECT_SELECT)
                }}
                className='flex-1'
                label={i18n.t('REGISTER.COUNTRY_LABEL')}
              />
            )}
          />

          <Controller
            control={control}
            name='department'
            render={({ field }) => (
              <FormSelect
                data={formValues.departments}
                value={field.value}
                onValueChange={e => {
                  field.onChange(e)
                  const r = filterCities(
                    formValues.municipalities,
                    e?.value ?? ''
                  )

                  setFilteredCities(r)
                  setValue('city', r[0])
                  setValue('commune', DEFAULT_OBJECT_SELECT)
                  setValue('neighborhood', DEFAULT_OBJECT_SELECT)
                }}
                className='flex-1'
                label={i18n.t('REGISTER.DEPARTMENT_LABEL')}
                disabled={!isCountryColombia}
              />
            )}
          />

          <Controller
            control={control}
            name='city'
            render={({ field }) => (
              <FormSelect
                data={filteredCities}
                value={field.value}
                onValueChange={e => {
                  field.onChange(e)
                  setValue('commune', DEFAULT_OBJECT_SELECT)
                  setValue('neighborhood', DEFAULT_OBJECT_SELECT)
                }}
                className='flex-1'
                label={i18n.t('REGISTER.CITY_LABEL')}
                disabled={!isCountryColombia}
              />
            )}
          />
        </View>

        <View className='flex-row gap-2 items-center h-12'>
          <Controller
            control={control}
            name='commune'
            render={({ field }) => (
              <FormSelect
                data={formValues.communes}
                value={field.value}
                onValueChange={e => {
                  field.onChange(e)
                  const l = filterNeighborhoods(
                    formValues.neighborhoods,
                    e?.value ?? ''
                  )

                  setFilteredNeigh(l)
                  setValue('neighborhood', l[0])
                }}
                className='flex-1 h-12'
                label={i18n.t('REGISTER.COMMUNE_LABEL')}
                disabled={!isCountryColombia || !isOcana}
              />
            )}
          />

          <Controller
            control={control}
            name='neighborhood'
            render={({ field }) => (
              <FormSelect
                data={filteredNeigh}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1 h-12'
                label={i18n.t('REGISTER.NEIGHBORHOOD_LABEL')}
                disabled={!isCountryColombia || !isOcana || isOtherCommune}
              />
            )}
          />
        </View>

        <Text variant='h3'>{i18n.t('REGISTER.USER_DATA_TITLE')}</Text>

        <Controller
          control={control}
          name='email'
          render={({ field, fieldState }) => (
            <FormInput
              label={i18n.t('REGISTER.EMAIL_LABEL')}
              hint={i18n.t('REGISTER.EMAIL_HINT')}
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
              leftComponent={<Icon as={Mail} size={18} />}
            />
          )}
        />

        <View className='flex-row gap-2'>
          <Controller
            control={control}
            name='phoneExtension'
            render={({ field, fieldState }) => (
              <FormInput
                label={i18n.t('REGISTER.PHONE_EXTENSION_LABEL')}
                hint={i18n.t('REGISTER.PHONE_EXTENSION_HINT')}
                value={field.value}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
                leftComponent={<Icon as={Plus} size={18} />}
                inputMode='decimal'
                viewClassName='flex-3/12'
              />
            )}
          />

          <Controller
            control={control}
            name='phone'
            render={({ field, fieldState }) => (
              <FormInput
                label={i18n.t('REGISTER.PHONE_LABEL')}
                hint={i18n.t('REGISTER.PHONE_HINT')}
                value={field.value}
                onChangeText={field.onChange}
                error={fieldState.error?.message}
                leftComponent={<Icon as={Phone} size={18} />}
                viewClassName='flex-9/12'
                mask='999-9999-9999'
              />
            )}
          />
        </View>

        <View className='flex-row gap-2 items-center h-12'>
          <Controller
            control={control}
            name='role'
            defaultValue={ROLES[0]}
            render={({ field }) => (
              <FormSelect
                data={ROLES}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1'
                label={i18n.t('REGISTER.ROLE_LABEL')}
              />
            )}
          />

          <Controller
            control={control}
            name='school'
            defaultValue={formValues.schools[0]}
            render={({ field }) => (
              <FormSelect
                data={formValues.schools}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1'
                label={i18n.t('REGISTER.SCHOOL_LABEL')}
              />
            )}
          />

          <Controller
            control={control}
            name='schoolLevel'
            defaultValue={formValues.educationLevels[0]}
            render={({ field }) => (
              <FormSelect
                data={formValues.educationLevels}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1'
                label={i18n.t('REGISTER.SCHOOL_LEVEL_LABEL')}
              />
            )}
          />
        </View>

        <Controller
          control={control}
          name='password'
          render={({ field, fieldState }) => (
            <FormInput
              label={i18n.t('REGISTER.PASSWORD_LABEL')}
              hint={i18n.t('REGISTER.PASSWORD_HINT')}
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
              leftComponent={<Icon as={Key} size={18} />}
              isPassword
            />
          )}
        />

        <Controller
          control={control}
          name='confirmPassword'
          render={({ field, fieldState }) => (
            <FormInput
              label={i18n.t('REGISTER.CONFIRM_PASSWORD_LABEL')}
              hint={i18n.t('REGISTER.CONFIRM_PASSWORD_HINT')}
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
              leftComponent={<Icon as={Key} size={18} />}
              isPassword
            />
          )}
        />

        <Button onPress={handleSubmit(onSubmit)}>
          <Text>{i18n.t('REGISTER.REGISTER_BUTTON')}</Text>
        </Button>
      </View>
    </ScrollView>
  )
}
