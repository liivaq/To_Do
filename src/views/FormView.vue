<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-y-4 mt-10" novalidate>

    <div>
      <label for="name">Name*</label>
      <CustomInput v-model:value="data.name" id="name" type="text"></CustomInput>
      <div class="text-red-400" v-if="errors.name">{{ errors.name }}</div>
    </div>

    <div>
      <label for="email">Email*</label>
      <CustomInput v-model:value="data.email" id="email" type="email"></CustomInput>
      <div class="text-red-400" v-if="errors.email">{{ errors.email }}</div>
    </div>

    <div>
      <label for="repeatEmail">Repeat Email*</label>
      <CustomInput v-model:value="data.repeatEmail" id="repeatEmail" type="email"></CustomInput>
      <div class="text-red-400" v-if="errors.repeatEmail">{{ errors.repeatEmail }}</div>
    </div>

    <div>
      <label for="password">Password*</label>
      <CustomInput v-model:value="data.password" id="password" type="password"></CustomInput>
      <div class="text-red-400" v-if="errors.password">{{ errors.password }}</div>
    </div>

    <CustomButton type="submit">
      Submit
    </CustomButton>

  </form>

</template>

<script lang="ts" setup>

import {reactive} from "vue";
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import {nameValidation} from "@/utils/nameValidation";
import {emailValidation} from "@/utils/emailValidation";
import {repeatEmailValidation} from "@/utils/repeatEmailValidation";
import {passwordValidation} from "@/utils/passwordValidation";

const data = reactive({
  name: '',
  email: '',
  repeatEmail: '',
  password: ''
})

const errors = reactive({
  name: '',
  email: '',
  repeatEmail: '',
  password: ''
})


const handleSubmit = () => {
  const {isValid: isNameValid, errorMessage: nameErrorMessage} = nameValidation(data.name)
  if (!isNameValid) {
    errors.name = nameErrorMessage
  } else {
    errors.name = ''
  }

  const {isValid: isEmailValid, errorMessage: emailErrorMessage} = emailValidation(data.email)
  if (!isEmailValid) {
    errors.email = emailErrorMessage
  } else {
    errors.email = ''
  }

  const {isValid: isRepeatEmailValid, errorMessage: emailRepeatErrorMessage} =
      repeatEmailValidation(data.email, data.repeatEmail)

  if (!isRepeatEmailValid) {
    errors.repeatEmail = emailRepeatErrorMessage
  } else {
    errors.repeatEmail = ''
  }

  const {isValid: isPasswordValid, errorMessage: passwordErrorMessage} =
      passwordValidation(data.password)

  if (!isPasswordValid) {
    errors.password = passwordErrorMessage
  } else {
    errors.password = ''
  }



  if (!isNameValid || !isEmailValid) {
    return
  }
}


</script>