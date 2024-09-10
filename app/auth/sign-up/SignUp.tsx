'use client';

import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ERROR_USER_EXISTS, HOME_URL } from '../../../config/constants';
import Button from '../../components/form-items/Button';
import Input from '../../components/form-items/Input';

const SignUp = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const onLoginSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in');
        router.push(HOME_URL);
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const onRegisterSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        toast.success('Registered!');
        reset();
        setSignUp(false);
      })
      .catch((_error) => {
        toast.error(ERROR_USER_EXISTS);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="bg-sign-up bg-cover bg-no-repeat bg-center h-screen overflow-hidden">
      <section className="w-screen h-full">
        <div className="mx-10 my-14 md:mx-24 md:my-24 md:w-1/3 text-white">
          <h1 className="flex  text-2xl font-medium">User Sign up</h1>
          <p className="flex text-lg">
            Log in to get started on building remotely.
          </p>
          <span className="flex flex-col mt-14">
            <Input
              id="email"
              label="Email"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-traverse-dark text-white"
              errors={errors}
              required
            />
          </span>
          {isSignUp && (
            <span className="flex flex-col mt-6">
              <Input
                id="name"
                label="Name"
                disabled={isLoading}
                placeholder=""
                register={register}
                styles="bg-traverse-dark text-white"
                errors={errors}
                required
              />
            </span>
          )}
          <span className="flex flex-col mt-6">
            <Input
              id="password"
              label="Password"
              type="password"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-traverse-dark text-white"
              errors={errors}
              required
            />
          </span>
          {isSignUp && (
            <span className="flex flex-col mt-6">
              <Input
                id="repeatPassword"
                label="Repeat password"
                type="password"
                disabled={isLoading}
                placeholder=""
                register={register}
                styles="bg-traverse-dark text-white"
                errors={errors}
                required
              />
            </span>
          )}
          {/* <Link
            href={HOME_URL}
            className="flex flex-col mt-11 w-full h-10 bg-traverse-yellow place-content-center items-center text-black rounded-md"
          > */}
          <div className="mt-11">
            {isSignUp ? (
              <Button
                disabled={isLoading}
                label="Sign Up"
                onClick={handleSubmit(onRegisterSubmit)}
              />
            ) : (
              <Button
                disabled={isLoading}
                label="Sign In"
                onClick={handleSubmit(onLoginSubmit)}
              />
            )}
          </div>
          {/* </Link> */}
          {!isSignUp && (
            <span className="flex mt-6 w-full place-content-center items-center">
              <p>{`Don't have an account? `}</p>
              <button
                onClick={() => {
                  setSignUp(true);
                }}
                className="text-traverse-yellow ml-1"
              >
                Sign up
              </button>
            </span>
          )}
          {isSignUp && (
            <span className="flex mt-6 w-full place-content-center items-center">
              <p>{`Already have an account? `}</p>
              <button
                onClick={() => {
                  setSignUp(false);
                }}
                className="text-traverse-yellow ml-1"
              >
                Log in
              </button>
            </span>
          )}
        </div>
      </section>
    </div>
  );
};

export default SignUp;
