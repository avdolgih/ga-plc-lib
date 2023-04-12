import Device from "./Device";
import ModbusRTU from "modbus-serial";
import Register, { Access } from "./Register";

export default class Server {

    public readonly devices: Device[];
    private readonly client: ModbusRTU = new ModbusRTU();

    constructor(devices: Device[], port: string, rate: Rate) {
        this.devices = devices;
        this.client.connectRTUBuffered(port, { baudRate: rate } )
    }

    private pooling: boolean = false;

    public start(): void {
        while (true) {
            for (let i = 0; i < this.devices.length; i++) {
                const device: Device = this.devices[i];
                for (let n = 0; n < device.registers.length; n++) {
                    const register: Register = device.registers[n];
                    if (register.access == Access.Read || Access.ReadWrite)
                        this.read(register);

                    if (!this.pooling)
                        return;
                }
            }

        }
    }

    public stop(): void {

    }

    private read(register: Register): number {
        return 0;
    }

    private write(addr: number, val: number) {

    }

}

export enum Rate {
    r9600 = 9600,
    r19200 = 19200,
    r115200 = 115200
}