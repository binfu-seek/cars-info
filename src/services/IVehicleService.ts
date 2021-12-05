import VehicleType from "../const/vehicleType";

export interface IVehicleService {
    getTotalNumberOfVehicles(): Promise<number>
    getExistingVecleTypes(): Promise<VehicleType[]>
    getMostPreferedVehicleType(): Promise<VehicleType>
}