import { APIService } from '../../../shared/services/api/api.service';
import { FirebaseService } from '../../../shared/services/firebase/firebase.service';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { autoSpy } from './../../../../../auto-spy';
import { HttpResponse } from '@angular/common/http';
import { SiteGraphService } from './site-graph.service';
import { DocumentData, DocumentReference } from 'firebase/firestore';
import { TestBed } from '@angular/core/testing';

describe('SiteGraphService', () => {
    let service: SiteGraphService;

    beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteGraphService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('when loadFirebaseBlockToGraph is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.loadFirebaseBlockToGraph('test');
        // assert
        // expect(s).toEqual
    });
    it('when loadApiBlockToGraph is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.loadApiBlockToGraph('test');
        // assert
        // expect(s).toEqual
    });
    it('when saveToSiteGraph is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.saveToSiteGraph('firebase', 'test');
        // assert
        // expect(s).toEqual
    });
    it('when loadSiteGraph is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.loadSiteGraph();
        // assert
        // expect(s).toEqual
    });
    it('when fetchSiteGraph is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.fetchSiteGraph();
        // assert
        // expect(s).toEqual
    });
    it('when fetchBlocks is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.fetchBlocks('test');
        // assert
        // expect(s).toEqual
    });
    it('when fetchAllBlocks is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.fetchAllBlocks();
        // assert
        // expect(s).toEqual
    });
    it('when addBlockItemToFireBase is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.addBlockItemToFireBase('firebase', {});
        // assert
        // expect(s).toEqual
    });

});

function setup() {
    const apiService = autoSpy(APIService);
    apiService.callAPI.and.returnValue(EMPTY);
    const firebaseService = autoSpy(FirebaseService);
    firebaseService.getCollection.and.returnValue(EMPTY);
    firebaseService.addBlockItemToFireBase.and.returnValue(new Promise(res => {}));
    const store = autoSpy(Store);
    store.select.and.returnValue(EMPTY);
    const builder = {
        apiService,
        firebaseService,
        store,
        default() {
            return builder;
        },
        build() {
            return new SiteGraphService(apiService, firebaseService, store);
        },
        
    withApiServiceCallAPIReturn(c: Observable<HttpResponse<any>>) {
            apiService.callAPI.and.returnValue(c);
            return builder;
        },withFirebaseServiceGetCollectionReturn(g: Observable<any[]>) {
            firebaseService.getCollection.and.returnValue(g);
            return builder;
        },
        withFirebaseServiceAddBlockItemToFireBaseReturn(a: Promise<DocumentReference<DocumentData, DocumentData> | undefined>) {
            firebaseService.addBlockItemToFireBase.and.returnValue(a);
            return builder;
        },withStoreSelectReturn(s: Observable<any>) {
            store.select.and.returnValue(s);
            return builder;
        },}
    return builder;
}