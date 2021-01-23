import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RedditPost {
  
      title: string;
      link: string;
      image: string;
    }
  
@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  posts: RedditPost[] = [];
  apiUrl = 'https://www.reddit.com/r/aww/.json';
  constructor(private httpClient: HttpClient) { }

  getInfo() {
    const url = "https://www.reddit.com/r/aww/.json"
    this.httpClient.get(url).subscribe (
      (response: any) => {
        console.log(response);

        const posts = response.data.children;

        for (let post of posts) {

          const redditPost : RedditPost = {
            title: post.data.title,
            link: "https://reddit.com" + post.data.permalink,
            image: post.data.thumbnail
          };

          this.posts.push(redditPost);
        }
      },
      (error) => {
        console.log(error);
      }
    )
}
}

