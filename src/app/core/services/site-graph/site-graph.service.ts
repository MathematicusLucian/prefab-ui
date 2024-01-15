import { Injectable } from '@angular/core';
import { APIService } from '../api/api.service';
import appConfig from "../../config/app.config.json";
import { Store } from '@ngrx/store';
import { addBlock } from '../../../shared/core-state/actions';

@Injectable({
  providedIn: 'root'
})
export class SiteGraphService {
  error: any;

  constructor(private apiService: APIService, private store: Store) {}

  loadSiteGraph(){
    
    appConfig.dataPaths.forEach((dataPath:any) => {

      console.log('x-2a', dataPath.name);

      const apiPath = appConfig.dataPipelineUrl + dataPath.path;

      this.apiService.callAPI(apiPath)
      .subscribe((data:any) => {

        console.log('x-2b', data.body);
        
        this.store.dispatch(addBlock({block: {
          name: dataPath.name,
          body: data.body
        }}));

      }, (error: any) => this.error = error); 
    
    });

  }

}