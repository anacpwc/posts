import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'; // Verifique o caminho

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { } 

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data: any[]) => { 
        this.posts = data; 
      },
      error: (err: any) => console.error('Error:', err)
    });
  }

  truncateText(text: string, limit: number = 30): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }
}