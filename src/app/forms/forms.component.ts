import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public data= {
    "studentRecords": [
      {
        "studentName": "Shashi",
        "class": "b.tech",
        "section": "B",
        "FatherName": "Ram Surat Yadav",
        "mobileNo": [
          1234567890,
          23456788765
        ],
        "subject": [
          "C",
          "Java",
          "DBMS"
        ],
        "address": {
          "resident": {
            "addressLine1": "xyz",
            "city": "gorakhpur",
            "state": "UP"
          },
          "parmanent": "abc"
        },
        "relation": {
          "father": [
            {
              "name": "qwe",
              "age": 40,
              "like": true,
              "relation": "chacha"
            },
            {
              "name": "PQR",
              "age": 60,
              "like": true,
              "relation": "dadi"
            }
          ],
          "mother": [
            {
              "name": "qwe",
              "age": 40,
              "like": true,
              "relation": "mama"
            },
            {
              "name": "PQR",
              "age": 60,
              "like": true,
              "relation": "nani"
            }
          ]
        }
      },
      {
        "studentName": "hrsh",
        "class": "b.tech",
        "section": "B",
        "FatherName": "sanjay kumar dixit",
        "mobileNo": [
          1234567890,
          23456788765
        ],
        "subject": [
          "C",
          "Java",
          "DBMS"
        ],
        "address": {
          "resident": {
            "addressLine1": "xyz",
            "city": "gorakhpur",
            "state": "UP"
          },
          "parmanent": "abc"
        },
        "relation": {
          "father": [
            {
              "name": "qwe",
              "age": 40,
              "like": true,
              "relation": "chacha"
            },
            {
              "name": "PQR",
              "age": 60,
              "like": true,
              "relation": "dadi"
            }
          ],
          "mother": [
            {
              "name": "qwe",
              "age": 40,
              "like": true,
              "relation": "mama"
            },
            {
              "name": "PQR",
              "age": 60,
              "like": true,
              "relation": "nani"
            }
          ]
        }
      }

    ]
  };

constructor(){
}
  ngOnInit() {
   
  }
  formSource=[{
    route:"home",
    displayName:"Home",
    cssClass:"btn btn-primary"},

    {route:"form",
    displayName:"Form",
    cssClass:"btn btn-info"
    },
    {
      route:"student",
    displayName:"Student",
    cssClass:"btn btn-danger"
    }
]

  clickMe(){
    alert(this.data?.studentRecords[0].FatherName);
   console.log (this.data?.studentRecords[0].studentName);
  }

}
