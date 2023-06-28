import { Streamer, Vote } from "../../shared/interfaces";
import { ENDPOINTS, HttpService } from "../api";

export enum StreamersMethods {
  GET = "getStreamers",
  GET_ONE = "getOneStreamer",
  ADD = "addStreamer",
  ADD_VOTE = "addStreamerVote",
}

const StreamersService = {
  [StreamersMethods.GET]: () =>
    HttpService.get<Streamer[]>(ENDPOINTS.STREAMERS),

  [StreamersMethods.GET_ONE]: (streamerId: string) =>
    HttpService.get<Streamer>(`${ENDPOINTS.STREAMERS}/${streamerId}`),

  [StreamersMethods.ADD]: (streamer: Omit<Streamer, "id">) =>
    HttpService.post<void>(ENDPOINTS.STREAMERS, streamer),

  [StreamersMethods.ADD_VOTE]: (vote: Vote) =>
    HttpService.put<void>(
      `${ENDPOINTS.STREAMERS}/${vote.streamerId}/vote`,
      vote
    ),
};

export default StreamersService;
