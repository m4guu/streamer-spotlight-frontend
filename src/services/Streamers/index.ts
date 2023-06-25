import { Streamer, Vote } from "../../shared/interfaces";
import { ENDPOINTS, HttpService } from "../api";

export enum StreamersMethods {
  GET = "getStreamers",
  GET_ONE = "getOneStreamer",
  ADD = "addStreamer",
  ADD_VOTE = "addStreamerVote",
}

const StreamersService = {
  [StreamersMethods.GET]: (pageParam: number) =>
    HttpService.get<Streamer[]>(`${ENDPOINTS.STREAMERS}?page=${pageParam}`),

  [StreamersMethods.GET_ONE]: (streamerId: string) =>
    HttpService.get<Streamer>(`${ENDPOINTS.STREAMERS}/${streamerId}`),

  [StreamersMethods.ADD]: (streamer: Streamer) =>
    HttpService.post<void>(ENDPOINTS.STREAMERS, streamer),

  [StreamersMethods.ADD_VOTE]: (vote: Vote) =>
    HttpService.post<void>(
      `${ENDPOINTS.STREAMERS}/${vote.streamerId}/vote`,
      vote
    ),
};

export default StreamersService;
