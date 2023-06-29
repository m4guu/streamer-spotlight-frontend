import React from "react";
import { FormProvider } from "react-hook-form";

import { Typography } from "@mui/material";
import { styled } from "@mui/system";

import { useStreamerSubmissionForm } from "../../../../hooks/form-hooks/streamer/useStreamerSubmissionForm";

import { Description, Name, Platform } from "./views/StreamerSubmission.form";
import { SubmitButton } from "../../../../components";
import { StatusBar } from "../../../../feauters/StatusBar/StatusBar";

export const StreamerSubmissionForm: React.FC = () => {
  const { methods, onSubmit, canSubmit, isAddingStreamer, addStreamerError } =
    useStreamerSubmissionForm();
  const { handleSubmit } = methods;
  console.log(addStreamerError);

  return (
    <FormProvider {...methods}>
      <FormWrapper>
        <Typography variant="subtitle1">add yours streamer!</Typography>

        <Name />
        <Platform />
        <Description />

        <SubmitButton
          label="add streamer"
          variant="contained"
          loading={isAddingStreamer}
          disabled={!canSubmit}
          onClick={handleSubmit((data) => onSubmit(data))}
        />
      </FormWrapper>
      <StatusBar error={addStreamerError} />
    </FormProvider>
  );
};

const FormWrapper = styled("form")(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.background.layout,
}));
