import {Component} from "@angular/core";

@Component({
    selector: 'gdh-volunteers-list',
    templateUrl: './volunteers-list.component.html',
})
export class VolunteersListComponent {
    volunteers: VolunteersDetails[] = [
        {
            id: 1,
            name: 'Name',
            surname: 'Surname',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown',
            points: 15366,
            photo: 'user'
        },
        {
            id: 2,
            name: 'Name',
            surname: 'Surname',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown',
            points: 15366,
            photo: 'user'
        },
        {
            id: 3,
            name: 'Name',
            surname: 'Surname',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown',
            points: 15366,
            photo: 'user'
        },
    ];

}

export interface VolunteersDetails {
    id: number,
    photo: string,
    name: string,
    surname: string,
    description: string,
    points: number
}