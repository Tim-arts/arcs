import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: [
        './../../homepage/homepage.component.scss',
        './services.component.scss'
    ]
})

export class ServicesComponent implements OnInit {
    services: Object[];

    constructor() {
        this.services = [
            {
                title: "Site vitrine",
                icon: "assets/icons/cards/responsive.svg",
                paragraph: "Vous souhaitez partager votre activité sur internet en y apportant de la visibilité ? Nous créons pour vous un site personnalisé !"
            },
            {
                title: "Site e-commerce",
                icon: "assets/icons/cards/computer.svg",
                paragraph: "Faite vivre votre activité en ligne et convertissez vos prospects en quelques clics. La vente en ligne n’aura plus aucun secret pour vous !"
            },
            {
                title: "Audit de site",
                icon: "assets/icons/cards/analysis.svg",
                paragraph: "Vous n’arrivez pas à attirer de personne sur votre site ? vous n’y connaissez rien en digital ? Contactez-nous !"
            },
            {
                title: "Intranet",
                icon: "assets/icons/cards/process.svg",
                paragraph: "Collaborer avec vos collègues de travail à l’aide d’une interface commune. Travaillez ensemble sera pour vous un jeu d’enfant !"
            }
        ]
    }

    ngOnInit(): void {
    }

}
