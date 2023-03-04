import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  // aaa() {
  //   return 'Hello World!';
  // }
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
}
