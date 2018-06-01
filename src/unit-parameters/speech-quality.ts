import {
  IUnitParameter,
  IUnitParameterConfig,
  UnitParameter,
} from '@gamegains/kit';

export class SpeechQuality extends UnitParameter implements IUnitParameter {
  // noinspection TsLint
  private static readonly UNIT_PARAMETER_CONFIG: IUnitParameterConfig = {
    id: 'speechQuality',

    name: 'Speech Quality',

    description: 'Quality of speech argument',

    weight: 0.5,
  };

  constructor() {
    super(SpeechQuality.UNIT_PARAMETER_CONFIG);
  }
}
