/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class ProductModel {
  public categoryProductCount: number;
  public itemsPerPage: number;

  constructor(generalsettingForm: any) {
    this.categoryProductCount = generalsettingForm.categoryProductCount || 0;
    this.itemsPerPage = generalsettingForm.itemPage || 0;
  }
}
