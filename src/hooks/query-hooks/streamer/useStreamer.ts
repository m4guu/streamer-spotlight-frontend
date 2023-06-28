import { useQuery } from "@tanstack/react-query";

import StreamersService, {
  StreamersMethods,
} from "../../../services/Streamers";

import { QueryKeys } from "../../../shared/enums";
import { CustomError, Streamer } from "../../../shared/interfaces";

export const useStreamer = (streamerId: string) => {
  return useQuery<Streamer, CustomError>([QueryKeys.STREAMER, streamerId], () =>
    StreamersService[StreamersMethods.GET_ONE](streamerId)
  );
};
