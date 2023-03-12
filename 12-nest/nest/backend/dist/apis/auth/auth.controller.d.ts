import { AuthService } from 'dist/apis/auth/auth.service';
import { Request, Response } from 'express';
import { User } from '../users/entities/users.entity';
import { UserService } from '../users/user.service';
interface IOAuthUser {
    user: Pick<User, 'email' | 'password' | 'name' | 'age'>;
}
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    loginGoogle(req: Request & IOAuthUser, res: Response): Promise<void>;
}
export {};
