import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent  {

  public courses = [
    {Name: 'C Language', Photo: 'assets/c.jpg',Fee:'Fee: Rs.100', Enroll: 0},
   
  ];
  public courses1 = [
    {Name: 'C++ Language', Photo: 'assets/cplus.jpg',Fee:'Fee: Rs.150', Enroll: 0},
   
  ];
  

}
