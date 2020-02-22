export interface Pomodoro {
  id: string;
  label: string;
  duration: number;
  shortBreak: number;
  longBreak: number;
  remainingCycles: number;
}

export type IPomodoroReducerType = { [key: string]: Pomodoro };
