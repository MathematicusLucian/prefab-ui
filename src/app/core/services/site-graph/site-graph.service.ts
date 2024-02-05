import { Injectable } from '@angular/core';
import { APIService } from '../../../shared/services/api/api.service';
import { Store } from '@ngrx/store';
import { addBlock } from '../../../shared/core-state/actions';
import { FirebaseService } from '../../../shared/services/firebase/firebase.service';
import { Observable, of } from 'rxjs';
import { selectSiteGraph } from '../../../shared/core-state'; //selectBlock
import { flatMap, mergeMap } from 'rxjs';

import appConfig from "../../config/app.config.json";

@Injectable({
  providedIn: 'root'
})
export class SiteGraphService {
  error: any;
  items$!: Observable<any>;

  constructor(private apiService: APIService, 
    private firebaseService: FirebaseService,
    private store: Store
  ) {}

  loadFirebaseBlockToGraph(dataPath: any){
    const p_id = (dataPath.parent_id) ? dataPath.parent_id : "";
    const parent_grouping_id = (dataPath.parent_grouping_id) ? dataPath.parent_grouping_id : "";

    return this.firebaseService.getCollection(dataPath.collectionName, p_id, parent_grouping_id);
  }

  loadApiBlockToGraph(dataPath: any) { 
    const apiPath = appConfig.dataPipelineUrl + dataPath.path;

    return this.apiService.callAPI(apiPath);
  }

  saveToSiteGraph(dataSourceType: any, dataPath: any) {
    this.items$ = (dataSourceType === "firebase") ? this.loadFirebaseBlockToGraph(dataPath) : this.loadApiBlockToGraph(dataPath);
    this.items$.subscribe((data:any) => {

      const blockToAdd = (dataSourceType === "firebase") ?
        {block: {
          name: dataPath.name,
          body: data
        }}
        :
        {block: {
          name: dataPath.name,
          body: data.body
        }};        
        
      this.store.dispatch(addBlock(blockToAdd));
    });
  }

  loadSiteGraph(){
    const dataSourceType = appConfig.dataSourceType;
    appConfig.dataPaths.forEach((dataPath:any) => {
      this.saveToSiteGraph(dataSourceType, dataPath);
    }, (error: any) => this.error = error); 
  }

  fetchSiteGraph() {
    return this.store.select(selectSiteGraph);
  }
  
  fetchBlocks(blockName: string) {
    return this.fetchSiteGraph().pipe(
      mergeMap((val: any) => {
        const data: any = val.filter((y:any) => { if(y.name == blockName) return y.body });
        return of((data[0]) ? data[0].body : [])
      })
    );
  }
  
  fetchAllBlocks() {
    return this.fetchSiteGraph().pipe(
      mergeMap((val: any) => {
        const data: any = val;
        return of((data[0]) ? data[0].body : [])
      })
    );
  }

  async addBlockItemToFireBase(collectionName: string, newData: object) {
    await this.firebaseService.addBlockItemToFireBase(collectionName, newData);
  }

}