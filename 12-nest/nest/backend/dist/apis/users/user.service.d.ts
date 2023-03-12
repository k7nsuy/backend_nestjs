import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne({ email }: {
        email: any;
    }): Promise<User>;
    create({ email, hspassword: password, name, age }: {
        email: any;
        hspassword: any;
        name: any;
        age: any;
    }): Promise<{
        email: any;
        password: any;
        name: any;
        age: any;
    } & User>;
}
