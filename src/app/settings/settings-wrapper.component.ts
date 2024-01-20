import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'gdh-settings-wrapper',
    templateUrl: './settings-wrapper.component.html',
})
export class SettingsWrapperComponent {
    userData: UserForModification = new class implements UserForModification {
        city = '';
        country = '';
        name = '';
        oldPassword = '';
        password = '';
        repeatPassword = '';
        surname = '';
    };
    hidePassword: boolean = true;

    constructor(private dialogRef: MatDialogRef<SettingsWrapperComponent>) {
    }
    close() {
        this.dialogRef.close()
    }

    updateCredencials() {

    }

    onChange($event: string, passwordModel: { control: { touched: any; markAsTouched: () => void; }; }){
        this.userData.password = $event;
        if(!passwordModel.control.touched){
            passwordModel.control.markAsTouched();
        }
    }
}

export interface UserForModification {
    name: string,
    surname: string,
    oldPassword: string,
    password: string,
    repeatPassword: string,
    city: string,
    country: string
}