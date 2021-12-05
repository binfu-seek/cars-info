import { IVehicleRepo } from "./IVehicleRepository";
import VehicleBase from "../models/VehicleBase";
import VehicleType from "../const/vehicleType";
import Car from "../models/Car";
import Truck from "../models/Truck";

export class VehicleRepo implements IVehicleRepo{
    private mockData: VehicleBase[];

    constructor() {
        this.mockData = [
            {
                type: VehicleType.Car,
                registration: '1a2b3c',
                numberOfSeat: 5
            } as Car,
            {
                type: VehicleType.Car,
                registration: '1a2b4d',
                numberOfSeat: 7
            } as Car,
            {
                type: VehicleType.Truck,
                registration: 't1t1t1',
                maxLoad: 3000,
            } as Truck,
            {
                type: VehicleType.Truck,
                registration: 't2t2t2',
                maxLoad: 4500,
            } as Truck,
            {
                type: VehicleType.Car,
                registration: '1a2b5e',
                numberOfSeat: 9
            } as Car,
        ]
    }

    public async getAll(){
        return this.mockData;
    }
}