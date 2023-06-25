import { useMutation, useQueryClient } from "@tanstack/react-query";

import StreamersService, {
  StreamersMethods,
} from "../../../services/Streamers";

import { QueryKeys } from "../../../shared/enums";

export const useAddStreamerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(StreamersService[StreamersMethods.ADD], {
    onSuccess: () => {
      // when this mutation succeeds, invalidate streamers queries
      queryClient.invalidateQueries({ queryKey: [QueryKeys.STREAMERS] });
    },
  });
};
