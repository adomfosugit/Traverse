'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import {
  SERVICE_AUTH_URL,
  SERVICE_DASHBOARD_URL,
} from '../../../../config/constants';
import Button from '../../../components/form-items/Button';
import Input from '../../../components/form-items/Input';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
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
        router.push(SERVICE_DASHBOARD_URL);
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <div className="bg-sign-up bg-cover bg-no-repeat bg-center h-screen overflow-hidden">
      <section className="w-screen h-full">
        <div className="mx-10 my-14 md:mx-24 md:my-24 md:w-1/3 text-white">
          <h1 className="flex  text-2xl font-medium">Service provider login</h1>
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

          <div className="mt-11">
            <Button
              disabled={isLoading}
              label="Sign In"
              onClick={handleSubmit(onLoginSubmit)}
            />
          </div>
          {/* </Link> */}

          <span className="flex mt-6 w-full place-content-center items-center">
            <p>{`Don't have an account? `}</p>
            <button
              onClick={() => router.push(SERVICE_AUTH_URL)}
              className="text-traverse-yellow ml-1"
            >
              Create an account
            </button>
          </span>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
