import { Component, OnInit } from '@angular/core';
import { ModelDetailComponent } from '../../components/model-detail/model-detail.component';
import { ModelListComponent } from '../../components/model-list/model-list.component';
import { ModelService } from '../../services/model.service';
import { Model } from '../../models/model.model';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ModelDetailComponent, ModelListComponent],
  templateUrl: './homepage.page.html',
  styleUrl: './homepage.page.scss'
})
export class HomepagePage implements OnInit {

  constructor(private modelService: ModelService) { }

  public models: Model[] | undefined;

  public currentModel: Model | undefined;

  ngOnInit(): void {
    this.modelService.getModels().subscribe(res => {
      this.models = res;
    })
  }

  newCurrentModel(event: Model) {
    this.currentModel = event;
  }


}
