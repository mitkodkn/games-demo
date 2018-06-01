import {
  IUnitParameter,
  IUnitParameterConfig,
  UnitParameter,
} from '@gamegains/kit';

export class DemoQuality extends UnitParameter implements IUnitParameter {
  // noinspection TsLint
  private static readonly UNIT_PARAMETER_CONFIG: IUnitParameterConfig = {
    name: 'Demo Quality',

    description: 'Quality of demo quality',

    weight: 0.5,
  };

  constructor() {
    super(DemoQuality.UNIT_PARAMETER_CONFIG);
  }
}
