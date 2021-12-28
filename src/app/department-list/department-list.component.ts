import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
selectedID:any;
  constructor(private Router :Router,private route :ActivatedRoute) { }
departments=[
  {id:1 ,name: "Angular"},
  {id:2 ,name: "Node"},
  {id:3 ,name: "MySql"},
  {id:4 ,name: "HTML"},
  {id:5 ,name: "BootStrap"},
]
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>
    {
      let id=parseInt(params.get('id') as string);
      this.selectedID=id;
    });
  }
onselect(dept:any){
 // this.Router.navigate(['/departments',dept.id]);
 this.Router.navigate([dept.id],{relativeTo: this.route})
}

isSelected(dept:any){
  return this.selectedID=== dept.id;
}
}
