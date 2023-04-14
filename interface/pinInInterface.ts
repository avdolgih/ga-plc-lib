import { TAnalogSignal, TDiscreteSignal } from "../types/signalTypes";

enum EPinIO {
  "OUTPUT",
  "INPUT",
  "IO",
}

export default interface IPin {
  name: string;

  ioSetting: EPinIO;
  signal: TAnalogSignal | TDiscreteSignal;

  setValue(
    value: TAnalogSignal["value"] | TDiscreteSignal["value"]
  ): TAnalogSignal["value"] | TDiscreteSignal["value"];

  getValue(): TAnalogSignal["value"] | TDiscreteSignal["value"];
}
