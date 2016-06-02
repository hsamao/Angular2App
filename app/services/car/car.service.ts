/**
 * Created by samao on 6/1/16.
 */

import {Injectable} from "@angular/core";
import {Body} from './body.service';
import {Engine} from './engine.service';
import {Tires} from './tires.service';

@Injectable()

export class Car {

  constructor(public body: Body, public engine: Engine, public tires: Tires) {

  }
}
