import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection, addDoc, CollectionReference, DocumentReference, serverTimestamp, Timestamp, query, where } from  "@angular/fire/firestore";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    newData!: CollectionReference;

    constructor(private http: HttpClient,
        private readonly afs: Firestore
    ) {}

  getCollection(collectionName: any, parent_id: any): Observable<any[]> {
    if (!collectionName) return of();

    let retrievedCollection = (parent_id!="") ?
      query(collection(this.afs, collectionName), where("parent_id", "==", parent_id))
    :
      collection(this.afs, collectionName);
    // const res = await collection(this.afs, "blog").orderBy('updated_at').get()
    return collectionData(retrievedCollection) as Observable<any>;
  }

  async addBlockItemToFireBase(collectionName: string, newData: any) {
    if (!collectionName) return;
    const newDataFormatted = await this.formatBlockItem(newData);
    return await addDoc(collection(this.afs, collectionName), newDataFormatted);
  }

  async formatBlockItem(newData: object) {
    const currentTimestamp = Timestamp.fromDate(new Date())
    return Object.assign({}, newData, {updateDate : currentTimestamp});
  }
}
