import React from 'react'
import {CardWrapper} from './CardWrapper'

const LoginForm = () => {
  return (
      <CardWrapper
          headerLabel='Welcome Back'
          backButtonLabel="Don't have an account?"
          backButtonHref="/auth/register"
          showSocial
      >
          Login Form
      </CardWrapper>
  )
}

export default LoginForm