import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = localStorage.getItem('idToken'); // Assuming the token is stored to localStorage
    if (token) {
      const decoded: JwtPayload = jwtDecode(token);
      return decoded;
    }
    return null; // Return null if there`s no token
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = localStorage.getItem('idToken');
    return !!token; // Returns true if token exists, otherwise false
  }
  
  isTokenExpired(token: string): boolean {
    // TODO: return a value that indicates if the token is expired
    const decoded: JwtPayload = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    return decoded.exp ? decoded.exp < currentTime : true;
  }

  getToken(): string | null {
    // TODO: return the token
    return localStorage.getItem('idToken');
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('idToken', idToken);
    window.location.href = '/'; // redirect to the home page
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('idToken');
    // TODO: redirect to the login page
    // The redirection will be handled by the calling component
  }

  timeLogout () {
    localStorage.removeItem('idToken');
    window.location.href = '/';
  }

  startSessionTimer() { // Set session to expire after 30 minutes of inactivity 
    const timeout = 30 * 60 * 1000; 
    setTimeout(() => { this.timeLogout(); }, timeout); 
  }
}

export default new AuthService();
