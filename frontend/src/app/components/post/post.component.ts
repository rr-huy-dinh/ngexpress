import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private posts;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getAll().subscribe((posts) => this.posts = posts);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.service.create(form.value).subscribe((posts) => this.posts.push(posts));
    }
  }

  deletePost(post) {
    this.service.delete(post._id).subscribe(
     () => {
       const index = this.posts.indexOf(post);
       this.posts.splice(index, 1);
     }
    );
  }

}
