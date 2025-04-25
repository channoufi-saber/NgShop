import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { CategoriesService } from '@bluebits/products';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component'
import { InputNumberModule } from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea'
import {InputSwitchModule} from 'primeng/inputswitch'
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { ImageModule } from 'primeng/image';


const routes:Routes=[
  {path:'',component:ShellComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'categories',component:CategoriesListComponent},
    {path:'categories/form',component:CategoriesFormComponent},
    {path:'categories/form/:id',component:CategoriesFormComponent},
    {path:'products',component:ProductsListComponent},
    {path:'products/form',component:ProductsFormComponent},
    {path:'products/form/:id',component:ProductsFormComponent},
  
  ]}
]
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoriesListComponent, CategoriesFormComponent, ProductsListComponent, ProductsFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ToolbarModule,
    EditorModule,
    ButtonModule,
    DropdownModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ImageModule,
    InputSwitchModule,
    TableModule,
    ToastModule,
    ColorPickerModule,
    InputTextModule,
    InputNumberModule,
    MessagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [CategoriesService,MessageService,ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

