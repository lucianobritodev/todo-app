import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './pages/public/login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  logado: boolean = false;

  constructor(
    private toastrService: ToastrService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.logado = !!this.loginService.getLogin();

    // if(!this.logado) {
    //   this.router.navigate(['/login']);
    // }
  }
}
