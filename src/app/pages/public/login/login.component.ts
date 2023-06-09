import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ILogin } from './models/login-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	formLogin!: FormGroup;

  constructor(
		private formBuilder: FormBuilder,
		private authService: LoginService,

	) { }


  ngOnInit(): void {
		this.formLogin = this.formBuilder.group({
			email: [ '', [Validators.required, Validators.email] ],
			password: [ '', [Validators.required, Validators.minLength(6), Validators.maxLength(10)] ],
			isSavePassword: [false]
		})
  }


	onSubmit() {
		const { email, password } = this.formLogin.value;
		const login: ILogin = { email, password }

		this.authService.login(login).subscribe(result => {
			if(!!result.email) {
				this.authService.setLogin(result);
			}
		});
	}

}
