import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from  "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    constructor(private http: HttpClient,
        private readonly afs: Firestore
    ) {
    }

  getCollection(collectionName: any): Observable<any[]> {
    const aCollection = collection(this.afs, collectionName)
    const data = collectionData(aCollection);
    return data;
  }
}
