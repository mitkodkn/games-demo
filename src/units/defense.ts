import { GameUnit, IGameUnit, IGameUnitConfig } from '@gamegains/kit';
import { DemoQuality, SpeechQuality } from '../unit-parameters';

export class Defense extends GameUnit implements IGameUnit {
  // noinspection TsLint
  private static GAME_UNIT_CONFIG: IGameUnitConfig = {
    name: 'Defense',

    description: 'Main unit in ELSYS defenses',

    parameters: [new SpeechQuality(), new DemoQuality()],
  };

  constructor() {
    super(Defense.GAME_UNIT_CONFIG);
  }

  public calculateScore(): Promise<number> {
    return Promise.resolve(0.5);
  }
}
