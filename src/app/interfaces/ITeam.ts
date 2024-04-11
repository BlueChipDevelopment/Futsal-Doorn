export interface Teams {
  TeamA: Team;
  TeamB: Team;
}

export interface Team {
  name?: string;
  squad: string[];
  attack: number;
  defense: number;
  condition: number;
  totalScore: number;
}
