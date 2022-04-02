import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from 'react';

import { Rivals } from '@/config';

import { Rival } from '../features/rivals/types';

export type RivalProviderProps = { children: ReactNode };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum RivalActionTypes {
  SelectRelation = 'SELECT_RELATION',
  AddPlayer = 'ADD_PLAYER',
  DeletePlayer = 'DELETE_PLAYER',
  EditPlayer = 'EDIT_PLAYER',
}
export enum RelationTypes {
  hostile = 'hostile',
  indifferent = 'indifferent',
  friendly = 'friendly',
}
export type RivalPayload = {
  [RivalActionTypes.SelectRelation]: {
    rivalName: string;
    playerName: string;
    type: 'hostile' | 'indifferent' | 'friendly';
  };
  [RivalActionTypes.AddPlayer]: {
    playerName: string;
  };
  [RivalActionTypes.DeletePlayer]: {
    playerName: string;
  };
  [RivalActionTypes.EditPlayer]: {
    playerName: string;
    playerNewName: string;
  };
};
export type RivalActions =
  ActionMap<RivalPayload>[keyof ActionMap<RivalPayload>];

export const rivalReducer = (state: Rival[], action: RivalActions) => {
  switch (action.type) {
    case 'SELECT_RELATION':
      return [...state].map((rival) => {
        if (rival.name !== action.payload?.rivalName) return { ...rival };
        rival.relations = [...rival.relations].map((relation) => {
          if (relation.player !== action.payload?.playerName)
            return { ...relation };
          relation.hostile = false;
          relation.indifferent = false;
          relation.friendly = false;
          relation[action.payload.type] = true;
          return { ...relation };
        });
        return { ...rival };
      });
    case 'ADD_PLAYER':
      return [...state].map((rival) => {
        const newRival = { ...rival, relations: [...rival.relations] };
        newRival.relations.push({
          character: rival.name,
          player: action.payload.playerName,
          hostile: false,
          indifferent: true,
          friendly: false,
        });
        return newRival;
      });
    case 'DELETE_PLAYER':
      return [...state].map((rival) => {
        rival.relations = [...rival.relations].filter(
          ({ player }) => player !== action.payload.playerName
        );
        return { ...rival };
      });
    case 'EDIT_PLAYER':
      return [...state].map((rival) => {
        rival.relations = [...rival.relations].map((relation) => {
          if (relation.player === action.payload.playerName)
            relation.player = action.payload.playerNewName;
          return { ...relation };
        });
        return { ...rival };
      });
    default:
      return state;
  }
};

export const RivalContext = createContext<[Rival[], Dispatch<RivalActions>]>([
  Rivals,
  () => null,
]);

export const RivalProvider = ({ children }: RivalProviderProps) => {
  const initialRivals: Rival[] =
    JSON.parse(localStorage.getItem('rivals') as string) || Rivals;

  const [rivals, dispatch] = useReducer(rivalReducer, initialRivals);

  useEffect(() => {
    localStorage.setItem('rivals', JSON.stringify(rivals));
  }, [rivals]);

  return (
    <RivalContext.Provider value={[rivals, dispatch]}>
      {children}
    </RivalContext.Provider>
  );
};

export const selectRelation = (payload: {
  rivalName: string;
  playerName: string;
  type: RelationTypes;
}): RivalActions => ({
  type: RivalActionTypes.SelectRelation,
  payload,
});

export const editPlayer = (payload: {
  playerNewName: string;
  playerName: string;
}): RivalActions => ({
  type: RivalActionTypes.EditPlayer,
  payload,
});

export const deletePlayer = (payload: {
  playerName: string;
}): RivalActions => ({ type: RivalActionTypes.DeletePlayer, payload });

export const addPlayer = (payload: { playerName: string }): RivalActions => ({
  type: RivalActionTypes.AddPlayer,
  payload,
});
