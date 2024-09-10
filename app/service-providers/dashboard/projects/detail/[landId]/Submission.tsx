'use client';
import axios from 'axios';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../../../../../components/form-items/Button';
import DocumentUpload from '../../../../../components/form-items/DocumentUpload';
import ImageUpload from '../../../../../components/form-items/ImageUpload';
import Select from '../../../../../components/form-items/Select';
import { TSafeLandElement, TSafeUser } from '../../../../../types';
import {
  EServiceOptions,
  EServiceStatus,
  TSelectOptions,
} from '../../../../../types/common';

interface ISubmissionProps {
  land: TSafeLandElement;
  currentUser?: TSafeUser | null;
}
const Submission = ({ land, currentUser }: ISubmissionProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      landId: land?.id,
      serviceProviderId: currentUser?.id,
      toBeCompletedOn: '',
      completedOn: '',
      serviceProvided: '',
      serviceStatus: '',
      imageSrc: [],
      documentSrc: [],
    },
  });

  const imageSrc = watch('imageSrc');
  const documentSrc = watch('documentSrc');

  const onSubmitService: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/services', data)
      .then(() => {
        toast.success('Service submitted!');
        router.back();
      })
      .catch((_error) => {
        toast.error('Error submitting service');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const serviceOptions: TSelectOptions[] = [
    { id: EServiceOptions.SITE_VISIT, value: EServiceOptions.SITE_VISIT },
    { id: EServiceOptions.SURVEY, value: EServiceOptions.SURVEY },
    { id: EServiceOptions.SITE_PREP, value: EServiceOptions.SITE_PREP },
    { id: EServiceOptions.DUE_DILIGENCE, value: EServiceOptions.DUE_DILIGENCE },
    {
      id: EServiceOptions.DUE_DILIGENCE_REPORT,
      value: EServiceOptions.DUE_DILIGENCE_REPORT,
    },
    {
      id: EServiceOptions.FINAL_SITE_PREP,
      value: EServiceOptions.FINAL_SITE_PREP,
    },
    { id: EServiceOptions.PURCHASE_FEES, value: EServiceOptions.PURCHASE_FEES },
    {
      id: EServiceOptions.PURCHASE_AGREEMENT,
      value: EServiceOptions.PURCHASE_AGREEMENT,
    },
    { id: EServiceOptions.CONVEYANCE, value: EServiceOptions.CONVEYANCE },
    { id: EServiceOptions.OATH, value: EServiceOptions.OATH },
    {
      id: EServiceOptions.DOCUMENT_SIGN,
      value: EServiceOptions.DOCUMENT_SIGN,
    },
    {
      id: EServiceOptions.LAND_REGISTRATION,
      value: EServiceOptions.LAND_REGISTRATION,
    },
    {
      id: EServiceOptions.STAMP_DUTY,
      value: EServiceOptions.STAMP_DUTY,
    },
    { id: EServiceOptions.CONCURRENCE, value: EServiceOptions.CONCURRENCE },
    {
      id: EServiceOptions.LAND_TITLE,
      value: EServiceOptions.LAND_TITLE,
    },
    {
      id: EServiceOptions.LAND_PREPARATION,
      value: EServiceOptions.LAND_PREPARATION,
    },
    { id: EServiceOptions.ISSUANCE, value: EServiceOptions.ISSUANCE },
  ];

  const serviceStatus: TSelectOptions[] = [
    { id: EServiceStatus.OPEN, value: EServiceStatus.OPEN },
    { id: EServiceStatus.ASSIGNED, value: EServiceStatus.ASSIGNED },
    { id: EServiceStatus.IN_PROGRESS, value: EServiceStatus.IN_PROGRESS },
    { id: EServiceStatus.BLOCKED, value: EServiceStatus.BLOCKED },
    { id: EServiceStatus.COMPLETED, value: EServiceStatus.COMPLETED },
  ];

  return (
    <div>
      <div>
        <div className="mt-12 bg-stone-50 px-10 py-8 w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="w-full">
            <p className="flex text-sm text-slate-500 mb-1">
              To be completed by
            </p>
            <input
              id="toBeCompletedOn"
              type="date"
              min={format(new Date(), 'yyyy-MM-dd')}
              className="bg-stone-50 text-sm border border-gray-200 rounded-md p-2 w-full text-slate-500 h-14"
              placeholder="To be completed on"
              {...register('toBeCompletedOn')}
            />
          </div>
          <div className="w-full">
            <p className="flex text-sm text-slate-500 mb-1">Service Provided</p>
            <Select
              id="serviceProvided"
              label="Service provided"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-stone-50 text-sm border border-gray-200 rounded-md p-2 w-full text-slate-500"
              errors={errors}
              required
              data={serviceOptions}
            />
          </div>
          <div className="w-full">
            <p className="flex text-sm text-slate-500 mb-1">Service Status</p>
            <Select
              id="serviceStatus"
              label="Service status"
              disabled={isLoading}
              placeholder=""
              register={register}
              styles="bg-stone-50 text-sm border border-gray-200 rounded-md p-2 w-full text-slate-500"
              errors={errors}
              required
              data={serviceStatus}
            />
          </div>
        </div>
      </div>
      <div className="mt-12 bg-stone-50 px-10 py-8 ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex-col">
            <p className="text-sm text-slate-500 mb-1">Completed on</p>
            <input
              id="completedOn"
              min={format(new Date(), 'yyyy-MM-dd')}
              type="date"
              className="bg-stone-50 text-sm border border-gray-200 rounded-md p-2 w-full  text-slate-500 h-14"
              placeholder="Completed on"
              {...register('completedOn')}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-36 mt-8">
          <div>
            <p>Upload all documents</p>
            <p className="text-sm text-slate-500">
              Required formats: PDFs, Docs
            </p>
            <DocumentUpload
              value={documentSrc}
              onChange={(value) => setCustomValue('documentSrc', value)}
            />
          </div>
          <div>
            <p>Upload all images</p>
            <p className="text-sm text-slate-500">
              Required formats: PNGs, JPGs, JPEGs
            </p>
            <ImageUpload
              value={imageSrc}
              onChange={(value) => setCustomValue('imageSrc', value)}
            />
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="mt-10">
            <Button
              disabled={isLoading}
              label="Submit"
              onClick={handleSubmit(onSubmitService)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
