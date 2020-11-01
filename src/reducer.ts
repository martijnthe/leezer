import { GameState, makePlayState } from "./GameState";
import Dictionary from "./dictionaries/Dictionary";

export interface TickAction {
  type: "tick";
  intervalMillis: number;
}

export interface StartAction {
  type: "start";
  dictionary: Dictionary;
}

export type Action =
  | TickAction
  | StartAction
  | {
      type: "pass" | "fail" | "restart";
    };

export default function reducer(state: GameState, action: Action): GameState {
  const {
    phase,
    points,
    errors,
    totalTimeMillis,
    timeMillis,
    restWords: previousRestWords,
  } = state;

  switch (action.type) {
    case "start": {
      return makePlayState([action.dictionary]);
    }
    case "restart": {
      return {
        ...state,
        phase: "start",
      };
    }
    case "tick": {
      if (phase !== "play") return state;
      const newTimeMillis = timeMillis + action.intervalMillis;
      if (newTimeMillis >= totalTimeMillis) {
        return {
          ...state,
          phase: "finish",
        };
      }
      return {
        ...state,
        timeMillis: newTimeMillis,
      };
    }
    case "fail":
    case "pass": {
      const [nextWord, ...restWords] = previousRestWords;
      return {
        ...state,
        phase: restWords.length > 0 ? phase : "finish",
        points: points + (action.type === "pass" ? 1 : 0),
        errors: errors + (action.type === "fail" ? 1 : 0),
        word: nextWord,
        restWords,
      };
    }
  }
}
