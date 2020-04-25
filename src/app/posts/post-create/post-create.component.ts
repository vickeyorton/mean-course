import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  postInput = "Your's Comment"
  postContent = "";
  onAddPost(){
    this.postContent = this.postInput;
  }
}
