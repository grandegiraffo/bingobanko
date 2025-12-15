import type { BingoSquare } from "@/types/bingo-square";

export type BingoSquareTemplate = Omit<BingoSquare, "marked">;

/**
 * Shape of a single game's definition.
 */
export type BingoGame = {
	GameId: string;
	GameName: string;
	GameSquares: BingoSquareTemplate[];
};

/**
 * Shape of each file in `src/game-data/*.ts`.
 *
 * These files export `GameModule`, which holds the full game definition.
 * `import.meta.glob<...>(..., { eager: true })` treats each file as an object
 * with the exported bindings as properties.
 */
export type BingoGameDataModule = {
	GameModule: BingoGame;
};
