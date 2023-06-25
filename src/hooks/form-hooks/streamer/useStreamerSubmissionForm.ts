import { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { StreamingPlatforms } from "../../../shared/enums";
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from "./constans";

export enum StreamerSubmmionFields {
  NAME = "name",
  PLATFORM = "platform",
  DESCRIPTION = "description",
}

export interface StreamerSubmission {
  [StreamerSubmmionFields.NAME]: string;
  [StreamerSubmmionFields.PLATFORM]: StreamingPlatforms;
  [StreamerSubmmionFields.DESCRIPTION]: string;
}

export const defaultValues = {
  [StreamerSubmmionFields.NAME]: "",
  [StreamerSubmmionFields.PLATFORM]: StreamingPlatforms.KICK,
  [StreamerSubmmionFields.DESCRIPTION]: "",
};

const streamerSubmissionSchema = yup.object().shape({
  [StreamerSubmmionFields.NAME]: yup
    .string()
    .required()
    .min(MIN_NAME_LENGTH)
    .max(MAX_NAME_LENGTH),
  [StreamerSubmmionFields.PLATFORM]: yup
    .mixed<StreamingPlatforms>()
    .oneOf(Object.values(StreamingPlatforms))
    .required(),
});

export const useStreamerSubmissionForm = () => {
  const methods = useForm<StreamerSubmission>({
    defaultValues,
    resolver: yupResolver(streamerSubmissionSchema),
  });

  const { watch, reset } = methods;
  const resetForm = useCallback(() => reset(), [reset]);
  const { name, platform, description } = watch();
  const canSubmit = name && platform && description;

  const onSubmit = useCallback(async (formValues: StreamerSubmission) => {
    // todo: add logic when query will be added
    console.log(formValues);
  }, []);

  return {
    methods,
    onSubmit,
    canSubmit,
    resetForm,
  };
};
