export type SessionType = "task" | "shortBreak" | "longBreak";

export interface ISession {
  id: string;
  type: SessionType;
}

export type ISessionReducerType = ISession | null;
