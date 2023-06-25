import { useInfiniteQuery } from "@tanstack/react-query";

import StreamersService, {
  StreamersMethods,
} from "../../../services/Streamers";

import { QueryKeys } from "../../../shared/enums";

export const useStreamers = () => {
  return useInfiniteQuery(
    [QueryKeys.STREAMERS],
    ({ pageParam = 1 }) => StreamersService[StreamersMethods.GET](pageParam),
    {
      getNextPageParam: (lastPage, pages) =>
        // is there next page validation
        lastPage.length < 10 ? undefined : pages.length + 1,
    }
  );
};
