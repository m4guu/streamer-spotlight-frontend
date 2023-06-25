import { useQuery } from "@tanstack/react-query";

import StreamersService, {
  StreamersMethods,
} from "../../../services/Streamers";

import { QueryKeys } from "../../../shared/enums";

export const useStreamers = () => {
  return useQuery(
    [QueryKeys.STREAMERS],
    StreamersService[StreamersMethods.GET]
  );
};
