import {Component} from '@angular/core';
import {noop} from "rxjs";
import {Router} from "@angular/router";
@Component({
    selector: 'gdh-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    userData: UserData = new class implements UserData {
        city = '';
        country = '';
        email = '';
        name = '';
        password = '';
        repeatPassword = '';
        surname = '';
    };
    hidePassword: boolean = true;

    constructor(private router: Router) {}

    onChange($event: string, passwordModel: { control: { touched: any; markAsTouched: () => void; }; }){
        this.userData.password = $event;
        if(!passwordModel.control.touched){
            passwordModel.control.markAsTouched();
        }
    }

    redirectToLogin(): void {
        this.router.navigate(['/login']).then(noop);
    }
}

export interface UserData {
    name: string,
    surname: string,
    email: string,
    password: string,
    repeatPassword: string,
    city: string,
    country: string
}
