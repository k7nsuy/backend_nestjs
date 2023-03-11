import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  loginGoogle() {
    console.log('hELLO!');
  }
}
