/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class DetailModel {
  public Id: string;

  constructor(DetailForm: any) {
    this.Id = DetailForm.Id || '';
  }
}
