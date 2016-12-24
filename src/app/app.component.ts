import { Component } from '@angular/core';

import {DataTableModule} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  completeTable = [
    {"id" : 1 , "first_name": "Jorge", "last_name":"Cano", "medium":"@jorgeucano", "twitter" : "#jorgeucano" },
    {"id" : 2 , "first_name": "Jorge_2", "last_name":"Cano_2", "medium":"@jorgeucano_2", "twitter" : "#jorgeucano_2" },
    {"id" : 3 , "first_name": "Jorge_3", "last_name":"Cano_3", "medium":"@jorgeucano_3", "twitter" : "#jorgeucano_3" },
    {"id" : 4 , "first_name": "Jorge_4", "last_name":"Cano_4", "medium":"@jorgeucano_4", "twitter" : "#jorgeucano_4" },
    {"id" : 5 , "first_name": "Jorge_5", "last_name":"Cano_5", "medium":"@jorgeucano_5", "twitter" : "#jorgeucano_5" },
    {"id" : 6 , "first_name": "Jorge_6", "last_name":"Cano_6", "medium":"@jorgeucano_6", "twitter" : "#jorgeucano_6" },
    {"id" : 7 , "first_name": "Jorge_7", "last_name":"Cano_7", "medium":"@jorgeucano_7", "twitter" : "#jorgeucano_7" },
    {"id" : 8 , "first_name": "Jorge_8", "last_name":"Cano_8", "medium":"@jorgeucano_8", "twitter" : "#jorgeucano_8" },
    {"id" : 9 , "first_name": "Jorge_9", "last_name":"Cano_9", "medium":"@jorgeucano_9", "twitter" : "#jorgeucano_9" },
    {"id" : 10 , "first_name": "Jorge_10", "last_name":"Cano_10", "medium":"@jorgeucano_10", "twitter" : "#jorgeucano_10" }
  ];

}
