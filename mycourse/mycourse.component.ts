import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent  {

  public courses = [
    {Name: 'C Language', Photo: 'assets/c.jpg',Fee:'Fee: Rs.100', Enroll: 0},
   
  ];
  public courses1 = [
    {Name: 'C++ Language', Photo: 'assets/cplus.jpg',Fee:'Fee: Rs.150', Enroll: 0},
   
  ];

}
