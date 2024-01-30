import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection, addDoc, CollectionReference, DocumentReference, serverTimestamp, Timestamp } from  "@angular/fire/firestore";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    newData!: CollectionReference;

    constructor(private http: HttpClient,
        private readonly afs: Firestore
    ) {}

  getCollection(collectionName: any): Observable<any[]> {
    if (!collectionName) return of();

    const retrievedCollection = collection(this.afs, collectionName)
    const data = collectionData(retrievedCollection) as Observable<any>;
    // const res = await collection(firestore, "blog").orderBy('updated_at').get()
    return data;
  }

  async addBlockItemToFireBase(collectionName: string, newData: any) {
    if (!collectionName) return;

    const newDataFormatted = await this.formatBlockItem(collectionName, newData);
    return await addDoc(collection(this.afs, collectionName), newDataFormatted);
  }

  async formatBlockItem(collectionName: string, newData: object) {
    const currentTimestamp = Timestamp.fromDate(new Date())
    return Object.assign({}, newData, {updateDate : currentTimestamp});
  }
}
