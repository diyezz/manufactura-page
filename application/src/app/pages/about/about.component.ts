import { Component, OnInit } from '@angular/core';
import { environment } from "environments/environment";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  image1 = environment.baseUrl + '/assets/img/team-photos/team-photo-example.jpg';
  personsData = [
      {
        'name': 'Denis Braharchuk',
        'position': 'Head architect, Manufactura founder',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem commodi, consequuntur corporis distinctio ducimus ea earum, eos, et illo magnam molestiae perferendis qui quisquam quod repellat repellendus voluptatum. Consequuntur dolores eum exercitationem in laudantium natus nostrum omnis ratione sed?',
        'photo': '/assets/img/team-photos/denis.jpg',
        'social': [
            {'facebook': 'https://www.facebook.com/'},
            {'twitter': 'https://www.twitter.com/'},
            {'instagram': 'https://www.instagram.com/denis_bragarchuk/'},
            {'googlePlus': 'https://www.google.com/'},
            {'youtube': 'https://www.youtube.com/'}
        ]
      },
      {
          'name': 'Deborah Somersby',
          'position': 'Lead architect',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem commodi, consequuntur corporis distinctio ducimus ea earum, eos, et illo magnam molestiae perferendis qui quisquam quod repellat repellendus voluptatum. Consequuntur dolores eum exercitationem in laudantium natus nostrum omnis ratione sed?',
          'photo': '/assets/img/team-photos/woman-architect-example.jpg',
          'social': [
              {'facebook': 'https://www.facebook.com/'},
              {'instagram': 'https://www.instagram.com/'},
          ]
      },
      {
          'name': 'Cristoph Smith',
          'position': 'Interior designer, architect',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem commodi, consequuntur corporis distinctio ducimus ea earum, eos, et illo magnam molestiae perferendis qui quisquam quod repellat repellendus voluptatum. Consequuntur dolores eum exercitationem in laudantium natus nostrum omnis ratione sed?',
          'photo': '/assets/img/team-photos/man-architect-example.jpg',
          'social': [
              {'facebook': 'https://www.facebook.com/'},
              {'twitter': 'https://www.twitter.com/'},
              {'instagram': 'https://www.instagram.com/'},
              {'googlePlus': 'https://www.google.com/'}
          ]
      }
  ];
  awards = [
      {
          'name': 'Vira Urkaine!',
          'description': 'Architectural and construction forum',
          'place': 'Odessa, Ukraine',
          'nomination': 'Public interior',
          'date': '2016',
          'photo': 'https://instagram.fiev15-1.fna.fbcdn.net/vp/070393440e30a4bf3bbb996b934f5d69/5C13DAAF/t51.2885-15/e35/12826007_830290587117616_984226766_n.jpg'
      },
      {
          'name': 'Architect Forum',
          'description': 'Very famous architect forum',
          'place': 'Kyiv, Ukraine',
          'nomination': 'Public interior',
          'date': '2017',
          // 'photo': 'https://instagram.fiev15-1.fna.fbcdn.net/vp/070393440e30a4bf3bbb996b934f5d69/5C13DAAF/t51.2885-15/e35/12826007_830290587117616_984226766_n.jpg'
      },
  ];

  constructor() { }

  ngOnInit() {
  }

}
