import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] = [];
  post: Post = new Post();
  nome: string = "";

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: any) => { 
      this.listPost = data;
    });
  }

  findPostByNome() {
    this.postService.getPostByNome(this.nome).subscribe((data: any) => { 
      this.listPost = data;
    });
  }

  publicar() {
    this.postService.postMensagem(this.post).subscribe( (data: any) => {
      this.post = data;
      location.assign('/feed');
    });
  }

}
