import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.less']
})
export class PostCreateComponent {
  postInput = ""
  postContent = "";
  onAddPost(){
    this.postContent = this.postInput;
  }
}
