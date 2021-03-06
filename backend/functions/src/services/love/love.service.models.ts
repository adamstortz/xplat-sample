export interface Love {
  id?: string;
  userId?: string;
  sketchId?: string;
  total?: number;
  bonus?: number;
  badgeId?: string;
  color?: string;
}

export interface LoveQueryParams {
  match?: Partial<Love>;
  limit?: number;
}
