import { flatMap, shuffle, uniq } from "lodash";
import Dictionary from "./dictionaries/Dictionary";

export interface GameState {
  phase: "start" | "play" | "finish";
  points: number;
  errors: number;
  timeMillis: number;
  totalTimeMillis: number;
  word: string;
  restWords: string[];
}

const ONE_MINUTE_MILLIS = 60 * 1000;

export const INITIAL_STATE: GameState = {
  phase: "start",
  points: 0,
  errors: 0,
  timeMillis: 100,
  totalTimeMillis: ONE_MINUTE_MILLIS,
  word: "",
  restWords: [],
};

export function makePlayState(dictionaries: Dictionary[]): GameState {
  const [firstWord, ...restWords] = shuffle(
    uniq(flatMap(dictionaries, (d) => d.words))
  );
  return {
    phase: "play",
    points: 0,
    errors: 0,
    timeMillis: 100,
    totalTimeMillis: ONE_MINUTE_MILLIS,
    word: firstWord,
    restWords,
  };
}
