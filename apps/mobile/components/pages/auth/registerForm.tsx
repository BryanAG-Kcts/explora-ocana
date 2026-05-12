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
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { ScrollView, View } from 'react-native'
import { FormInput } from '@/components/global/formInput'
import { FormSelect } from '@/components/global/formSelect'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import {
  armedConflicts,
  cities,
  countries,
  departments,
  documentTypes,
  ethnicGroups,
  genres,
  neighborhoods,
  RegisterSchema,
  type RegisterSchemaType,
  roles,
  schoolLevels,
  schools
} from '@/constants/pages/auth/register'
import { i18n } from '@/locales/i18n'

export function RegisterForm() {
  const { control, handleSubmit, watch } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema)
  })

  const onSubmit: SubmitHandler<RegisterSchemaType> = data => console.log(data)
  const isCountryColombia = watch('country')?.value === 'colombia'

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
            defaultValue={documentTypes[0]}
            render={({ field }) => (
              <FormSelect
                data={documentTypes}
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
                mask='99/99/9999'
                keyboardType='numeric'
              />
            )}
          />

          <Controller
            control={control}
            name='gender'
            defaultValue={genres[0]}
            render={({ field }) => (
              <FormSelect
                data={genres}
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
            defaultValue={armedConflicts[0]}
            render={({ field }) => (
              <FormSelect
                data={armedConflicts}
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
            defaultValue={ethnicGroups[0]}
            render={({ field }) => (
              <FormSelect
                data={ethnicGroups}
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
            defaultValue={countries[0]}
            render={({ field }) => (
              <FormSelect
                data={countries}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1'
                label={i18n.t('REGISTER.COUNTRY_LABEL')}
              />
            )}
          />

          <Controller
            control={control}
            name='department'
            defaultValue={departments[0]}
            render={({ field }) => (
              <FormSelect
                data={departments}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1'
                label={i18n.t('REGISTER.DEPARTMENT_LABEL')}
                disabled={!isCountryColombia}
              />
            )}
          />

          <Controller
            control={control}
            name='city'
            defaultValue={cities[0]}
            render={({ field }) => (
              <FormSelect
                data={cities}
                value={field.value}
                onValueChange={field.onChange}
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
            defaultValue={neighborhoods[0]}
            render={({ field }) => (
              <FormSelect
                data={neighborhoods}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1 h-12'
                label={i18n.t('REGISTER.COMMUNE_LABEL')}
                disabled={!isCountryColombia}
              />
            )}
          />

          <Controller
            control={control}
            name='neighborhood'
            defaultValue={neighborhoods[0]}
            render={({ field }) => (
              <FormSelect
                data={neighborhoods}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1 h-12'
                label={i18n.t('REGISTER.NEIGHBORHOOD_LABEL')}
                disabled={!isCountryColombia}
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
            defaultValue={roles[0]}
            render={({ field }) => (
              <FormSelect
                data={roles}
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
            defaultValue={schools[0]}
            render={({ field }) => (
              <FormSelect
                data={schools}
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
            defaultValue={schoolLevels[0]}
            render={({ field }) => (
              <FormSelect
                data={schoolLevels}
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
