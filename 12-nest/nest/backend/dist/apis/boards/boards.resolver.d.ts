import { BoardService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.input';
export declare class BoardResolver {
    private readonly boardService;
    constructor(boardService: BoardService);
    fetchBoards(): void;
    createBoard(writer: string, title: string, contents: string, createBoardInput: CreateBoardInput): string;
}
