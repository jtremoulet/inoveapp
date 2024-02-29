import { Component, EventEmitter, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
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
export class ModelListComponent {

  @Input() models: Model[] | undefined;

  @Output() model = new EventEmitter<Model>();

  onClick(model: Model) {
    this.model.emit(model);
  }

}
