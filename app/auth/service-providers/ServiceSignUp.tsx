'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  ERROR_SERVICE_PROVIDER_EXISTS,
  SERVICE_AUTH_REVIEW_URL,
  SERVICE_AUTH_SIGN_IN_URL,
} from '../../../config/constants';
import Button from '../../components/form-items/Button';
import Input from '../../components/form-items/Input';
import Select from '../../components/form-items/Select';
import { TSelectOptions } from '../../types/common';

const ServiceSignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      initialPassword: '',
      country: '',
      profession: '',
      phone: '',
      officeAddress: '',
      businessName: '',
      email: '',
      professionalMembership: '',
      membershipId: '',
    },
  });

  const onRegisterSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/registerServiceProvider', data)
      .then(() => {
        toast.success('Registered!');
        router.push(SERVICE_AUTH_REVIEW_URL);
      })
      .catch((_error) => {
        toast.error(ERROR_SERVICE_PROVIDER_EXISTS);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const countryData: TSelectOptions[] = [
    { id: 'GH', value: 'Ghana' },
    { id: 'NG', value: 'Nigeria' },
    { id: 'KY', value: 'Kenya' },
  ];

  const professionData: TSelectOptions[] = [
    { id: 'GH', value: 'Surveyor' },
    { id: 'NG', value: 'Architect' },
    { id: 'KY', value: 'Lawyer' },
    { id: 'LB', value: 'Land broker' },
  ];

  const membershipData: TSelectOptions[] = [
    { id: 'NCL', value: 'National Association of Lawyers' },
    { id: 'CA', value: 'Chartered Architects' },
  ];

  return (
    <div className="bg-sign-up bg-cover bg-no-repeat bg-center h-screen overflow-hidden">
      <section className="w-screen h-full">
        <div className="mx-10 my-14 md:mx-24 md:my-24 md:w-1/3 text-white gap-y-4">
          <h1 className="flex  text-2xl font-medium">
            Service Provider Sign Up
          </h1>
          <p className="flex font-light text-sm pt-3">
            Fill out this form to get started on customer projects.
          </p>
          <span className="flex flex-col mt-14">
            <Input
              id="businessName"
              label="Name/Name of Entity"
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
              id="email"
              label="Email address"
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
              id="phone"
              label="Contact number"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-traverse-dark text-white"
              errors={errors}
              required
            />
          </span>
          <span className="flex flex-col mt-6">
            <Select
              id="country"
              label="Country"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-traverse-dark text-white"
              errors={errors}
              required
              data={countryData}
            />
          </span>
          <span className="flex flex-col mt-6">
            <Input
              id="officeAddress"
              label="Office location"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-traverse-dark text-white"
              errors={errors}
              required
            />
          </span>
          <span className="flex flex-col mt-6">
            <Select
              id="profession"
              label="Profession"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-traverse-dark text-white"
              errors={errors}
              required
              data={professionData}
            />
          </span>
          <span className="flex flex-col mt-6">
            <Select
              id="professionalMembership"
              label="Professional Membership/Affiliation"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-traverse-dark text-white"
              errors={errors}
              required
              data={membershipData}
            />
          </span>
          <span className="flex flex-col mt-6 mb-10">
            <Input
              id="membershipId"
              label="Professional Membership Identification Number"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-traverse-dark text-white"
              errors={errors}
              required
            />
          </span>
          <span className="flex flex-col mt-6 mb-10">
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
          <span className="flex flex-col mt-6 mb-10">
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
          <Button
            disabled={isLoading}
            label="Submit"
            onClick={handleSubmit(onRegisterSubmit)}
          />

          <span className="flex mt-6 w-full place-content-center items-center">
            <p>{`Already have an account? `}</p>
            <button
              onClick={() => router.push(SERVICE_AUTH_SIGN_IN_URL)}
              className="text-traverse-yellow ml-1"
            >
              Log in
            </button>
          </span>
        </div>
      </section>
    </div>
  );
};

export default ServiceSignUp;
