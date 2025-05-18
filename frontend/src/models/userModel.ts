export interface IUserCredential {
  token: string;
}

/**
 * User Model to handle users in SPA
 * 
 * @since 1.0.0
 */
class UserModel {
    private static token_placeholder = "authToken"
    static storeUserCredential(credential: IUserCredential): void {
        localStorage.setItem(this.token_placeholder, credential.token);
    }

    static getUserCredential(): IUserCredential | null {
        const stored = localStorage.getItem(this.token_placeholder);
        return stored ? {token: stored} : null;
    }

    static checkUserCredential(): boolean{
        const token = localStorage.getItem(this.token_placeholder);
        const isAuthenticated = !!token;
        return isAuthenticated;
    }
}

export default UserModel;