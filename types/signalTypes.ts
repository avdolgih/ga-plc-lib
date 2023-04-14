// Размероность сигнала.
// Ток, напряжение, мощность.
enum ESignalDemension {
  "A",
  "V",
  "P",
}

// Изменяемость сигнала во времени
// Постоянный, переменный, гармонический, прямоугольный, пилообразный, треугольный, трапецеидальный
enum ESignalAnalogTimeType {
  "CONSTANT",
  "VARIABLE",
  "GARMONIC",
}

enum ESignalDiscreteTimeType {
  "REACTANGLE",
  "SWATOOTH",
  "TRIANGULAR",
  "TRAPEZOIDAL",
}

type TAnalogSignal = {
  demension: ESignalDemension;
  timeType: ESignalAnalogTimeType;
  lowValue: number;
  highValue: number;
  value: number;
};

type TDiscreteSignal = {
  demension: ESignalDemension;
  timeType: ESignalDiscreteTimeType;
  lowValue: number;
  highValue: number;
  value: number;
};

export { TAnalogSignal, TDiscreteSignal };
