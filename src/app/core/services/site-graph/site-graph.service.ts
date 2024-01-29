import { Injectable } from '@angular/core';
import { APIService } from '../api/api.service';
import { Store } from '@ngrx/store';
import { addBlock } from '../../../shared/core-state/actions';
import { FirebaseService } from '../firebase/firebase.service';
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
    console.log('testing x-2a', dataPath.name);
    console.log('testing x-2a-2', dataPath.collectionName);

    return this.firebaseService.getCollection(dataPath.collectionName);
  }

  loadApiBlockToGraph(dataPath: any) { 
    console.log('x-2a', dataPath.name);

    const apiPath = appConfig.dataPipelineUrl + dataPath.path;

    return this.apiService.callAPI(apiPath);
  }

  loadSiteGraph(){

    const dataSourceType = appConfig.dataSourceType;
    console.log('testing', dataSourceType);

    appConfig.dataPaths.forEach((dataPath:any) => {
      this.items$ = (dataSourceType === "firebase") ? this.loadFirebaseBlockToGraph(dataPath) : this.loadApiBlockToGraph(dataPath);

      this.items$.subscribe((data:any) => {

        // console.log('testing x-2b', data);

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

        // console.log('testing x-2c', blockToAdd);
        
        this.store.dispatch(addBlock(blockToAdd));

        const blockToAdd2 = (dataSourceType === "firebase") ?
          {block: {
            name: 'bongo',
            body: data
          }}
          :
          {block: {
            name: dataPath.name,
            body: data.body
          }};
        
        this.store.dispatch(addBlock(blockToAdd2));

      });

    }, (error: any) => this.error = error); 

  }

  fetchSiteGraph() {
    return this.store.select(selectSiteGraph);
  }

  fetchBlocks(blockName: string) {
    return this.fetchSiteGraph().pipe(
      mergeMap((val: any) => {
        const data: any = val.filter((y:any) => { if(y.name == blockName) return y.body });
        console.log('testing x-1b',(data[0]) ? data[0].body : "a");
        return of((data[0]) ? data[0].body : [])
      })
    );
  }

}

// {"name": "menu_main", "path": "/get_menu_main/1"},
// {"name": "menu_links", "path": "/get_menu_links/1"},
// {"name": "skills", "path": "/get_skills_items/1"},
// {"name": "skills_tags", "path": "/get_skills_categories/1"},
// {"name": "projects", "path": "/get_projects/1"}