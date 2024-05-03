import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Labels {
  [key: string]: string;
}
@Injectable({
  providedIn: 'root'
})
export class LabelManagerService {
  constructor(private http: HttpClient) {}

  private labelsUrl: string = 'assets/label.json';
  private labels: Labels = {};

  public async loadLabels(): Promise<any> {
    try {
      this.labels = await this.http.get<Labels>(this.labelsUrl).toPromise();
    } catch (error) {
      console.error('Could not load labels:', error);
      return await Promise.reject(error);
    }
  }

  getLabel(key: string): string {
    return this.labels[key] || key;
  }
}
