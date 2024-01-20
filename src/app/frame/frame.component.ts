import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {SettingsWrapperComponent} from "../settings/settings-wrapper.component";

@Component({
    selector: 'gdh-frame',
    templateUrl: './frame.component.html',
})
export class FrameComponent {
    constructor(public dialog: MatDialog) {}

    openSettingsDialog(): void {
        this.dialog.open(SettingsWrapperComponent)
    }
}