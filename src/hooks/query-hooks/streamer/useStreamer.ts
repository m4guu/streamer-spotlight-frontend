import { useQuery } from "@tanstack/react-query";

import StreamersService, {
  StreamersMethods,
} from "../../../services/Streamers";

import { QueryKeys } from "../../../shared/enums";

export const useStreamer = (streamerId: string) => {
  return useQuery([QueryKeys.STREAMER, streamerId], () =>
    StreamersService[StreamersMethods.GET_ONE](streamerId)
  );
};
