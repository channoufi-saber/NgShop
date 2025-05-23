/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public baseUrl = 'http://localhost:3000/api/v1/categories';

  constructor(private http: HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl)
  }

  getCategory(categoryId:string):Observable<Category>{
    return this.http.get<Category>(`${this.baseUrl}/${categoryId }`)
  }

  createCategory(category:Category):Observable<Category>{
    return this.http.post<Category>(this.baseUrl,category);
  }

  updateCategory(category:Category):Observable<Category>{
    return this.http.put<Category>(`${this.baseUrl}/${category.id }`,category);
  }

  deleteCategory(categoryId:string):Observable<Object>{
    return this.http.delete<Object>(`${this.baseUrl}/${categoryId}`);
  }
}
