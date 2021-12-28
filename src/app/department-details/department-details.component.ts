import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
departmentID:any;
selectedID:any;
  constructor(private route:ActivatedRoute, private Router:Router) { }

  ngOnInit() {
    
    //let id=this.route.snapshot.paramMap.get('id') as string;
    this.route.paramMap.subscribe((params: ParamMap)=>
    {
      let id=parseInt(params.get('id') as string);
      this.departmentID=id;
    });
    //let idNUm=parseInt(id);
//this.departmentID=idNUm;
  }
onNext(){
  let nextID=this.departmentID+1;
  this.Router.navigate(['/departments',nextID])
}
onPrevious(){
let previousID=this.departmentID-1;
  this.Router.navigate(['/departments',previousID])
}
gotoDept(){
  this.selectedID=this.departmentID ? this.departmentID :null;
 // this.Router.navigate(['/departments',{id:this.selectedID}]);
 this.Router.navigate(['../',{id:this.selectedID}],{relativeTo:this.route})
}
onOverview(){
  this.Router.navigate(['overview'],{relativeTo:this.route});
}
onShow(){
this.Router.navigate(['contact'],{relativeTo:this.route});
}
}
