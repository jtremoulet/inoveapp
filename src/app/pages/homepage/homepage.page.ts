import { Component, OnInit } from '@angular/core';
import { ModelDetailComponent } from '../../components/model-detail/model-detail.component';
import { ModelListComponent } from '../../components/model-list/model-list.component';
import { ModelService } from '../../services/model.service';
import { Model } from '../../models/model.model';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ModelDetailComponent, ModelListComponent, MatButtonModule],
  templateUrl: './homepage.page.html',
  styleUrl: './homepage.page.scss'
})
export class HomepagePage implements OnInit {

  constructor(private modelService: ModelService, private router: Router) { }

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

  createModel() {
    this.router.navigateByUrl('/create');
  }

}

