import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostComponent } from './components/post/post.component';
import { ContactsComponent } from './components/contacts/contacts.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    StoriesComponent,
    AddPostComponent,
    PostComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    StoriesComponent,
    AddPostComponent,
    PostComponent,
    ContactsComponent
  ]
})
export class SharedModule { }
