import { Component, Input, OnInit } from '@angular/core';

interface RedditPost {
  
  title: string;
  link: string;
  image: string;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() post: RedditPost;

  constructor() { }

  ngOnInit(): void {
  }

}
