import {
  AuthResult,
  AuthStatus,
  Field,
  Game,
  IAuthResult,
  IGame,
  IGameConfig,
  IGameUnit,
} from '@gamegains/kit';

import { Defense } from './units/defense';
import { DemoQuality } from './unit-parameters';

export default class ElsysDefenses extends Game implements IGame {
  private static readonly GAME_CONFIG: IGameConfig = {
    name: 'Дипломни защити - The Game',

    databaseId: 'demo',

    description: 'Една игра с много спагети',

    logo:
      'http://res.cloudinary.com/doonloo-ltd/image/upload/v1527879090/logo_jiuvbq.png',

    developerKey: 'vtLF993sVqHFHN6W9z5c',
    developerSecret: 'M690prZo8nguTUuOAQygr52wSMvcwKO91lg9LsvU',

    gameUnits: [new Defense()],

    authTypes: [],

    requiredFields: [
      new Field('studentName', 'Ученик'),
      new Field('studentClass', 'Клас'),
    ],

    dataFields: [new Field('school', 'Училище')],

    verificationFields: [new Field('age', 'Възраст')],
  };

  constructor() {
    super(ElsysDefenses.GAME_CONFIG);
  }

  public async generateVerificationValues(): Promise<void> {
    this.setFieldValue('age', '18');
  }

  public async verifyPlayer(): Promise<IAuthResult> {
    return new AuthResult(AuthStatus.SUCCESS, 'Успешен достъп до защита!');
  }

  public getLatestUnits(gameUnit: IGameUnit): Promise<IGameUnit[]> {
    const defense1 = new Defense();
    defense1.setParameterValue('speechQuality', 5);
    defense1.setParameterValue('demoQuality', 10);

    const defense2 = new Defense();
    defense2.setParameterValue('speechQuality', 10);
    defense2.setParameterValue('demoQuality', 10);

    return Promise.resolve([defense1, defense2]);
  }
}
