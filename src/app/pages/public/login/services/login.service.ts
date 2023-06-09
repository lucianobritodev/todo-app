import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../models/login-models';

const baseUrl = environment.apiUrl + '/api/v1'
const TokenKeyName = 'access_token';
const RefresTokenKeyName = 'refres_token';
const userKeyName = 'user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
		private http: HttpClient,
		private router: Router
	) { }

	getToken(): string | undefined {
		const token = localStorage.getItem(TokenKeyName);
		if(!token) {
			return;
		}
		return token;
	}

	setToken(token: string): void {
		if(!!token) {
			localStorage.setItem(TokenKeyName, token);
		}
	}

  getRefreshToken(): string | undefined {
		const refreshToken = localStorage.getItem(RefresTokenKeyName);
		if(!refreshToken) {
			return;
		}
		return refreshToken;
	}

	setRefreshToken(refresToken: string): void {
		localStorage.setItem(RefresTokenKeyName, refresToken);
	}

	getLogin(): string | undefined {
		const token = localStorage.getItem(userKeyName);
		if(!token) {
			return;
		}
		return token;
	}

	setLogin(login: ILogin): void {
		if(!!login && !!login.email) {
			localStorage.setItem(userKeyName, login.email);
		}
	}

	login(login: ILogin): Observable<ILogin> {
			// user.password = this.encryptPassword(user.password);
			return this.http.post<ILogin>(baseUrl + '/login', login);
	}

	logout() {
    localStorage.removeItem(userKeyName);
		localStorage.removeItem(TokenKeyName);
    this.router.navigate(['login']);
  }

	// isAuthenticated(): boolean {
  //   const token = localStorage.getItem(TokenKeyName);
  //   return !this.jwtHelper.isTokenExpired(token || undefined);
  // }

	// private encryptPassword(pass: string): string {
	// 	const saltRounds = crypto.genSaltSync(12);
	// 	return bcrypt.hashSync(pass, saltRounds);
	// }
}
