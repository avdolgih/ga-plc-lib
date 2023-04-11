import { IPin } from "./pinInInterface";

interface IExtendModule {
  name: string;
  model: string;

  modBusAdress: string;

  pins: [IPin];

  setPinValue(pin: IPin["name"]): IPin["signal"];
  getPinValue(pin: IPin["name"]): IPin["signal"];
}

export { IExtendModule };
