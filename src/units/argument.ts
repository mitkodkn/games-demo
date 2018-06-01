import { GameUnit, IGameUnit, IGameUnitConfig } from '@gamegains/kit';

export class Argument extends GameUnit implements IGameUnit {
  // noinspection TsLint
  private static GAME_UNIT_CONFIG: IGameUnitConfig = {
    name: 'Argument',
    description: 'Main unit in ELSYS defenses',
    parameters: [],
  };

  constructor() {
    super(Argument.GAME_UNIT_CONFIG);
  }

  public calculateScore(): Promise<number> {
    return Promise.resolve(0.1);
  }
}
