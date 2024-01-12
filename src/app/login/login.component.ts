import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {noop} from "rxjs";
@Component({
    selector: 'gdh-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    userCredentials: UserCredentials = new class implements UserCredentials {
        email = '';
        password = '';
    }
    hidePassword: boolean = true;

    constructor(private router: Router) {}

    redirectToRegister() {
        this.router.navigate(['/register']).then(noop);
    }

    login() {
        this.router.navigate(['../../dashboard']).then(noop);
    }
}

export interface UserCredentials {
    email: string,
    password: string
}
