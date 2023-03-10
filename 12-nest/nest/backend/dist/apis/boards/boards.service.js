"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
let BoardService = class BoardService {
    findAll() {
        const result = [
            { number: 1, writer: '철수', title: '제목', contents: '내용' },
            { number: 2, writer: '철수2', title: '제목', contents: '내용' },
            { number: 3, writer: '철수3', title: '제목', contents: '내용' },
        ];
    }
    create() {
        return '등록 성공하였습니다.';
    }
};
BoardService = __decorate([
    (0, common_1.Injectable)()
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=boards.service.js.map