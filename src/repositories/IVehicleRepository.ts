import VehicleBase from '../models/VehicleBase'

export interface IVehicleRepo{
    getAll(): Promise<VehicleBase[]>
}
