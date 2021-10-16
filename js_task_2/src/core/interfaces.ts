export interface CategoryStatictic {
  name: string;
  active: number;
  archived: number;
}

export interface Note {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  archived: boolean;
}
