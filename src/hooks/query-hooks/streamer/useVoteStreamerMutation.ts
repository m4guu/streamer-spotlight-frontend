import { useMutation, useQueryClient } from "@tanstack/react-query";

import StreamersService, {
  StreamersMethods,
} from "../../../services/Streamers";

import { QueryKeys } from "../../../shared/enums";

export const useAddStreamerMutation = (streamerId: string) => {
  const queryClient = useQueryClient();

  return useMutation(StreamersService[StreamersMethods.ADD_VOTE], {
    onSuccess: () => {
      // when this mutation succeeds, invalidate streamers queries adn streamer
      queryClient.invalidateQueries({ queryKey: [QueryKeys.STREAMERS] });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.STREAMER, streamerId],
      });
    },
  });
};
