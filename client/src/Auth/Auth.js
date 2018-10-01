import auth0 from "auth0-js";

class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: "joseph526.auth0.com",
            audience: "https://joseph526.auth0.com/userinfo",
            clientID: "4FjnFf4wb7wQKyYUnY4QNVuhd8xumBTI",
            redirectUri: "http://localhost:3000/callback",
            responseType: "token id_token",
            scope: "openid profile"
        });

        this.getProfile = this.getProfile.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.setSession = this.setSession.bind(this);
    }

    getProfile() {
        return this.profile;
    }
    
    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (err) return reject(err);
                console.log(authResult);
                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }
                this.setSession(authResult);
                resolve();
            });
        });
    }

    isAuthenticated() {
        return new Date().getTime() < this.expiresAt;
    }

    login() {
        this.auth0.authorize();
    }

    logout() {
        // Clear id token, profile and expiration
        this.idToken = null;
        this.profile = null;
        this.expiresAt = null;
    }

    setSession(authResult) {
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // Set the time at which the id token will expire
        this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    }
}

const auth0Client = new Auth();

export default auth0Client;
