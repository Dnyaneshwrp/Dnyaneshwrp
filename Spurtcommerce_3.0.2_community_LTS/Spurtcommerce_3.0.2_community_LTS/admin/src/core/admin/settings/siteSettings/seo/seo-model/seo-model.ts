/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class SeoModel {
  public metaTagTitle: string;
  public metaTagDescription: string;
  public metaTagKeywords: string;

  constructor(generalsettingForm: any) {
    this.metaTagTitle = generalsettingForm.metaTagTitle || '';
    this.metaTagDescription = generalsettingForm.metaTagDescription || '';
    this.metaTagKeywords = generalsettingForm.metaTagKeywords || '';
  }
}
