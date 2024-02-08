import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Firestore, collectionData, collection, addDoc, CollectionReference, DocumentReference, serverTimestamp, Timestamp, query, where, getDocs, doc, getDoc } from  "@angular/fire/firestore";
import { of } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class FirebaseService {
	newData!: CollectionReference;

	constructor(private http: HttpClient,
        private readonly afs: Firestore
	) {}

	getCollection(collectionName: any, parent_id: any, parent_grouping_id: any): Observable<any[]> {
		if (!collectionName) return of();

		const retrievedCollection = (parent_grouping_id!="") ?
			query(collection(this.afs, collectionName), where("parent_grouping_id", "==", parent_grouping_id))
			: (parent_id!="") ?
				query(collection(this.afs, collectionName), where("parent_id", "==", parent_id))
				:
				collection(this.afs, collectionName);
		return collectionData(retrievedCollection, {idField: "id"}) as Observable<any>;
	}

	async getItemById(collectionName: any, id: any): Promise<any> {
		if (!collectionName) return of();

		const docRef = doc(this.afs, collectionName, id);
		const docSnap = await getDoc(docRef);
		let data;
		if(docSnap.exists()) {
			data = docSnap.data();
		}
		return data;
	}

	async addBlockItemToFireBase(collectionName: string, newData: any) {
		if (!collectionName) return;
		const newDataFormatted = await this.formatBlockItem(newData);
		return await addDoc(collection(this.afs, collectionName), newDataFormatted);
	}

	async formatBlockItem(newData: object) {
		const currentTimestamp = Timestamp.fromDate(new Date());
		return Object.assign({}, newData, {updateDate : currentTimestamp});
	}
}
