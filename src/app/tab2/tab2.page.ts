import { Component } from '@angular/core';
import { MagentoService } from './../api/magento.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  categories: any;

  constructor(private magento: MagentoService) {
    this.getCategories();
  }

  getCategories() {
    // tslint:disable-next-line: max-line-length
    let filter_1 = 'searchCriteria[filterGroups][0][filters][0][field]=is_active';
    let filter_2 = 'searchCriteria[filter_groups][0][filters][0][value]=true'
    const filter = `${filter_1}&${filter_2}`;
    this.magento.getCategories(filter)
    .pipe()
    .subscribe(data => {
      this.categories = data['children_data'];
      console.log(data['children_data']);
    });
  }
}
