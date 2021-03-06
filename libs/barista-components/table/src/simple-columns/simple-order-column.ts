/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { DtSimpleColumnBase } from './simple-column-base';

@Component({
  selector: 'dt-simple-order-column',
  templateUrl: 'simple-order-column.html',
  styleUrls: ['./simple-column.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.Emulated,
  /*
   * Deliberatley set to Default because the embedded view that gets created for the
   * dtColumDef can't handle onPush and results in ChangeAfterChecked error.
   */
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    { provide: DtSimpleColumnBase, useExisting: DtSimpleOrderColumn },
  ],
})
export class DtSimpleOrderColumn<T> extends DtSimpleColumnBase<T> {}
