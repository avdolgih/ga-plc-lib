import { IPin } from "./pinInInterface";

export default interface IExtendModule {
  name: string;
  model: string;

  modBusAdress: string;

  pins: [IPin];

  setPinValue(pin: IPin["name"]): IPin["signal"];
  getPinValue(pin: IPin["name"]): IPin["signal"];
}