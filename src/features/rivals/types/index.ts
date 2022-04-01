export type Rival = {
  name: string;
  goals: string[];
  imgSrc: string;
  relations: Relation[];
};

export type Relation = {
  player: string;
  hostile: boolean;
  friendly: boolean;
  indifferent: boolean;
};
