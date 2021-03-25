export type CellTypes = "code" | "text";

export interface Cell {
  id: string | undefined;
  type: CellTypes;
  content: string;
}
