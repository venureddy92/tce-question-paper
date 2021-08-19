import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuizTemplate } from 'libs/quiz-player/src/lib/quiz-player/models/quiz-template/quiz-template.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public apiUrl: string = 'http://localhost:3000/';
  // public apiUrl: string = '/assets/json/quiz-data.json';
  public questions: QuizTemplate[];
  public header: object = {
    headers: new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    )
  };
  constructor(private http: HttpClient) {}

  getQuizdata() {
    // this.http.get(`${this.apiUrl}questions`).pipe(
    //   map(data => this.serializeData(data)),
    //   catchError((err) => throwError('Quiz Model not found', err)),
    // );
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.apiUrl}questions`)
        // .get(`${this.apiUrl}`)
        .subscribe(
          (questions: QuizTemplate[]) => {
            this.questions = questions;
            resolve(true);
          },
          err => {
            this.questions = [];
            reject(true);
          }
        );
    });
  }

  categoryData() {
    return this.http.get('./assets/json/category-data.json');
  }

  addQuestion(sourceData) {
    return this.http.post(`${this.apiUrl}questions`, sourceData, this.header);
  }

  editQuestion(sourceData) {
    return this.http.put(
      `${this.apiUrl}questions/${sourceData.id}`,
      sourceData,
      this.header
    );
  }

  /**
   * Firebase Changes
   */
  // getQuizdata() {
  //   console.log(
  //     'TCE: DashboardService -> getQuizdata -> location.origin',
  //     location.origin
  //   );
  //   if (location.origin.indexOf('localhost:4200') > -1) {
  //     //local
  //     console.log('TCE: DashboardService -> getQuizdata -> local');
  //     return this.http.get(`http://localhost:3000/questions`);
  //   } else {
  //     //firebase local or remote
  //     console.log('TCE: DashboardService -> getQuizdata -> firebase');
  //     return this.http.get(
  //       `https://classedgeapps.firebaseapp.com/api/questions`
  //     );
  //   }
  // }
}
