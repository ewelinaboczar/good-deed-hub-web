import {Component} from "@angular/core";

@Component({
    selector: 'gdh-events-list',
    templateUrl: './events-list.component.html',
})
export class EventsListComponent {
    events: EventDetails[] = [
        {
            id: 1,
            tittle: 'Food collection for the poor',
            likes: 1203,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown'
        },
        {
            id: 2,
            tittle: 'Food collection for the poor',
            likes: 1203,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown'
        },
        {
            id: 3,
            tittle: 'Food collection for the poor',
            likes: 1203,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown'
        },
    ];

}

export interface EventDetails {
    id: number,
    tittle: string,
    likes: number,
    description: string
}