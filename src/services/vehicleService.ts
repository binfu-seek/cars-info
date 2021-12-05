import VehicleType from "../const/vehicleType";
import { IVehicleRepo } from "../repositories/IVehicleRepository";
import { IVehicleService } from "./IVehicleService";

export class VehicleService implements IVehicleService {
    private vehicleRepo: IVehicleRepo;

    constructor(vehicleRepo: IVehicleRepo) {
        this.vehicleRepo = vehicleRepo;
    }

    public getTotalNumberOfVehicles = async () => {
        const data = await this.vehicleRepo.getAll();
        return data.length;
    }

    public getExistingVecleTypes = async () => {
        const data = await this.vehicleRepo.getAll();

        const uniqueVehicleTypes =
            data.map(v => v.type)
                .filter((type, index, typeArr) => typeArr.indexOf(type) === index)

        return uniqueVehicleTypes;
    }

    public getMostPreferedVehicleType = async () => {
        const data = await this.vehicleRepo.getAll();

        const favType = VehicleType.Car;
        return favType;
    }
}