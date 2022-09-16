import {Injectable} from '@angular/core';
import {SexEnum} from "../../../lib-feature1/src/lib/feature1-main/sex-enum";

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {


  getDefaultSex(): SexEnum {
    return SexEnum.Man;
  }

  constructor() {

  }
}
