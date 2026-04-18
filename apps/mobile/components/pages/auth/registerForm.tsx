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
import { i18n } from '@/constants/global/i18n'
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

export function RegisterForm() {
  const { control, handleSubmit, watch } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema)
  })

  const onSubmit: SubmitHandler<RegisterSchemaType> = data => console.log(data)
  const isCountryColombia = watch('country')?.value === 'colombia'

  return (
    <ScrollView className='w-full'>
      <View className='flex-1 gap-9 w-full py-5'>
        <Text variant='h3'>{i18n.t('register.personalDataTitle')}</Text>

        <View className='flex-row gap-2'>
          <Controller
            control={control}
            name='name'
            render={({ field, fieldState }) => (
              <FormInput
                label={i18n.t('register.nameLabel')}
                hint={i18n.t('register.nameHint')}
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
                label={i18n.t('register.lastNameLabel')}
                hint={i18n.t('register.lastNameHint')}
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
                label={i18n.t('register.documentTypeLabel')}
              />
            )}
          />

          <Controller
            control={control}
            name='documentNumber'
            render={({ field, fieldState }) => (
              <FormInput
                label={i18n.t('register.documentNumberLabel')}
                hint={i18n.t('register.documentNumberHint')}
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
                label={i18n.t('register.birthdateLabel')}
                hint={i18n.t('register.birthdateHint')}
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
            name='genre'
            defaultValue={genres[0]}
            render={({ field }) => (
              <FormSelect
                data={genres}
                value={field.value}
                onValueChange={field.onChange}
                className='flex-1/3'
                label={i18n.t('register.genreLabel')}
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
                label={i18n.t('register.armedConflictLabel')}
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
                label={i18n.t('register.ethnicGroupLabel')}
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
                label={i18n.t('register.countryLabel')}
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
                label={i18n.t('register.departmentLabel')}
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
                label={i18n.t('register.cityLabel')}
                disabled={!isCountryColombia}
              />
            )}
          />
        </View>

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
              label={i18n.t('register.neighborhoodLabel')}
              disabled={!isCountryColombia}
            />
          )}
        />

        <Text variant='h3'>{i18n.t('register.userDataTitle')}</Text>

        <Controller
          control={control}
          name='email'
          render={({ field, fieldState }) => (
            <FormInput
              label={i18n.t('register.emailLabel')}
              hint={i18n.t('register.emailHint')}
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
                label={i18n.t('register.phoneExtensionLabel')}
                hint={i18n.t('register.phoneExtensionHint')}
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
                label={i18n.t('register.phoneLabel')}
                hint={i18n.t('register.phoneHint')}
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
                label={i18n.t('register.roleLabel')}
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
                label={i18n.t('register.schoolLabel')}
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
                label={i18n.t('register.schoolLevelLabel')}
              />
            )}
          />
        </View>

        <Controller
          control={control}
          name='password'
          render={({ field, fieldState }) => (
            <FormInput
              label={i18n.t('register.passwordLabel')}
              hint={i18n.t('register.passwordHint')}
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
              label={i18n.t('register.confirmPasswordLabel')}
              hint={i18n.t('register.confirmPasswordHint')}
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
              leftComponent={<Icon as={Key} size={18} />}
              isPassword
            />
          )}
        />

        <Button onPress={handleSubmit(onSubmit)}>
          <Text>{i18n.t('register.registerButton')}</Text>
        </Button>
      </View>
    </ScrollView>
  )
}
