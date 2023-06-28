import { useQuery } from "@tanstack/react-query";

import StreamersService, {
  StreamersMethods,
} from "../../../services/Streamers";

import { QueryKeys } from "../../../shared/enums";
import { CustomError, Streamer } from "../../../shared/interfaces";

export const useStreamers = () => {
  return useQuery<Streamer[], CustomError>(
    [QueryKeys.STREAMERS],
    StreamersService[StreamersMethods.GET]
  );
};
