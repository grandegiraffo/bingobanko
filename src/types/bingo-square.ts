export type Category =
  | "mainPlot"
  | "subPlot"
  | "character"
  | "visual"
  | "quote"
  | "meta";

  export interface BingoSquare {
  id: string;
  title: string;
  description: string;
  category: Category;
  marked: boolean;
}
