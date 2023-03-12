import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'dist/apis/auth/auth.service';
import { Request, Response } from 'express';
import { User } from '../users/entities/users.entity';
import { UserService } from '../users/user.service';

interface IOAuthUser {
  user: Pick<User, 'email' | 'password' | 'name' | 'age'>;
}

@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(@Req() req: Request & IOAuthUser, @Res() res: Response) {
    // 1. 가입 확인
    let user = await this.userService.findOne({ email: req.user.email });
    // 2. 회원 가입
    if (!user) {
      user = await this.userService.create({
        email: req.user.email,
        hspassword: req.user.password,
        name: req.user.name,
        age: req.user.age,
      });
    }
    // 3. 로그인
    this.authService.setRefreshToken({ user, res });
    res.redirect(
      'http://127.0.0.1:5500/12-nest/nest/frontend/social-login.html',
    );
  }
}
