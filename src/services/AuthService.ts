import { injectable } from 'inversify';
import { v4 } from 'uuid';

export interface IAuthService {
    setToken(token: string): void; 
    getToken(): { token?: string};
}

// Mark the class as injectable so Inversify can manage its dependencies
@injectable()
class AuthService implements IAuthService {
    private uuid: string;
    private token?: string;

    constructor()
    {
        this.uuid = `auth-${v4()}`;
        console.log(`constructor AuthService > ${this.uuid}`);
    }

    setToken(token: string): void {
        console.log(`SET TOKEN ${token} uuid ${this.uuid}`);
        this.token = token;
    }


    getToken(): { token?: string; } {
        console.log(`AuthService > GET TOKEN > ${this.token} uuid ${this.uuid}`);
        return {
            token: this.token
        }
    }
}

export { AuthService };
