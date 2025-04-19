/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@bluebits/products';
import { CategoriesService } from '@bluebits/products';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'bluebits-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit {

categories:Category[]=[]

  constructor(private categoriesService:CategoriesService,
        private messageService:MessageService,
        private _confirmationService: ConfirmationService,
        private router:Router

    
  ) { }

  ngOnInit(): void {
    this._getCategories()
  }

  private _getCategories(){
    this.categoriesService.getCategories().subscribe((cat)=>{
      this.categories=cat
    })
  }

  deleteCategory(categoryId: string) {
    
    this._confirmationService.confirm({
      message: 'Are you sure that you want to delete this category?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService.deleteCategory(categoryId).subscribe(
          (response) => {
            this._getCategories();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Category has been deleted successfully',
            });
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'An Error occurred: ' + error,
            });
          }
        );
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });

    
  }

    
  updateCategory(categoryid:string){
    this.router.navigateByUrl(`categories/form/${categoryid}`)
  }


}
