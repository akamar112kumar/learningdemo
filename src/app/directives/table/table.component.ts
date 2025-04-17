import { Component } from '@angular/core';

import { GenderPipe } from '../../pipes/gender.pipe';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FirstLetterCaptitalPipe } from '../../pipes/first-letter-captital.pipe';
import { TablestyleDirective } from '../tablestyle.directive';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, FirstLetterCaptitalPipe, GenderPipe, TablestyleDirective],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  varibeltocheck = "simple text to check pipe";

  nameList = {
    "names": [

      {
        "firstName": "emily",
        "lastName": "johnson",
        "score": 100,
        "remark": "good",
        "emp": "emp1",
        "gender": "F"
      },
      {
        "firstName": "rohini",
        "lastName": "sharma",
        "score": 100,
        "remark": "good",
        "emp": "emp2",
        "gender": "F"
      },
      {
        "firstName": "rohini",
        "lastName": "gupta",
        "score": 100,
        "remark": "good",
        "emp": "emp3",
        "gender": "F"
      },
      {
        "firstName": "rita",
        "lastName": "kumari",
        "score": 100,
        "remark": "good",
        "emp": "emp5",
        "gender": "F"
      },
      {
        "firstName": "rahul",
        "lastName": "kumar",
        "score": 100,
        "remark": "good",
        "emp": "emp6",
        "gender": "m"
      },
      {
        "firstName": "ritesh",
        "lastName": "sharma",
        "score": 100,
        "remark": "good",
        "emp": "emp7",
        "gender": "m"
      },
      {
        "firstName": "rohan",
        "lastName": "kunda",
        "score": 100,
        "remark": "good",
        "emp": "emp8",
        "gender": "M"
      },
      {
        "firstName": "ramesh",
        "lastName": "kumar",
        "score": 100,
        "remark": "good",
        "emp": "emp9",
        "gender": "m"
      },
      {
        "firstName": "raushni",
        "lastName": "kumari",
        "score": 100,
        "remark": "good",
        "emp": "emp10",
        "gender": "F"
      }




    ]
  }


}
