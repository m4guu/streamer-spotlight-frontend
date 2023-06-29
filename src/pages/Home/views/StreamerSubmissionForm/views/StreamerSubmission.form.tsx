import { MenuItem } from "@mui/material";
import { styled } from "@mui/system";

import ControlledTextField from "../../../../../feauters/ControlledTextField";
import { StreamerSubmmionFields } from "../../../../../hooks/form-hooks/streamer/useStreamerSubmissionForm";
import { StreamingPlatforms } from "../../../../../shared/enums";

// Name //
export const Name = styled(() => (
  <ControlledTextField
    variant="standard"
    size="small"
    label="Name"
    type="text"
    fieldName={StreamerSubmmionFields.NAME}
    placeholder="Krystian, Paulina..."
  />
))``;
//

// Platform //
export const Platform = styled(() => (
  <ControlledTextField
    variant="standard"
    size="small"
    label="Platform"
    select
    fieldName={StreamerSubmmionFields.PLATFORM}
  >
    {Object.values(StreamingPlatforms).map((streamingPlatform) => {
      return (
        <MenuItem key={streamingPlatform} value={streamingPlatform}>
          {streamingPlatform}
        </MenuItem>
      );
    })}
  </ControlledTextField>
))``;
//

// Description //
export const Description = styled(() => (
  <ControlledTextField
    variant="standard"
    size="small"
    label="Description"
    type="text"
    rows={5}
    multiline
    fieldName={StreamerSubmmionFields.DESCRIPTION}
    placeholder="Describe the streamer..."
  />
))``;
//
