import { Pipe, PipeTransform } from '@angular/core';
import {LabelManagerService} from "../service/label-manager.service";
import {Observable} from "rxjs";

@Pipe({
  name: 'labelManager',
  pure: false
})
export class LabelManagerPipe implements PipeTransform {

  constructor(private labelService: LabelManagerService) {}

  transform(value: string): string {
    return this.labelService.getLabel(value);
  }

}
