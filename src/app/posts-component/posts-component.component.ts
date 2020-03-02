import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service'

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
  posts = [];
  constructor(private httpservice:DataServiceService ) { }

  ngOnInit() {
    this.httpservice.GetPosts().subscribe(res =>{
     console.log(res);
     this.posts.push(res[0]);
   })
  }

}