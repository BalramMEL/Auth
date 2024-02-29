"use client"

import React, { useState, useTransition } from 'react'
import {CardWrapper} from './CardWrapper'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { RegisterSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { register } from '@/actions/register'


const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
             })
        })
    }

  return (
      <CardWrapper
          headerLabel='Create an account'
          backButtonLabel="Already have an account?"
          backButtonHref="/auth/login"
          showSocial
      >
          <Form {...form}>
              <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
              >
                  <div className='space-y-4'>
                      <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                      <Input
                                          {...field}
                                          disabled={isPending}
                                          placeholder='your name'                                                                                 
                                      />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                          )}
                      />

                      <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                      <Input
                                          {...field}
                                          disabled={isPending}
                                          placeholder='example@email.com'
                                          type='email'                                       
                                      />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                          )}
                      />

                      <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Password</FormLabel>
                                  <FormControl>
                                      <Input
                                          {...field}
                                          disabled={isPending}
                                          placeholder='********'
                                          type='password'                                       
                                      />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                          )}
                      />
                  </div>

                  <FormError message={error} />
                  <FormSuccess message={success} />

                  <Button
                      className='w-full'
                      type='submit'    
                      disabled={isPending}
                  >
                      Create an account
                  </Button>
              </form> 
          </Form>
      </CardWrapper>
  )
}

export default RegisterForm