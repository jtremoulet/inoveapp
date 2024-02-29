import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ModelService } from '../../services/model.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Model } from '../../models/model.model';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@Component({
  selector: 'app-model-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, DatePipe],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' },],
  templateUrl: './model-list.component.html',
  styleUrl: './model-list.component.scss'
})
export class ModelListComponent implements OnInit {

  models: Model[] = [];

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.modelService.getModels().subscribe(res => {
      this.models = res;
    })
  }

}
