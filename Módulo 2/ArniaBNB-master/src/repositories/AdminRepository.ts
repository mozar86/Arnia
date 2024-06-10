import { IAdmin } from '../entities/Admin';
import { AdminModel } from '../models/AdminModel';

class AdminRepository {
  async findByEmail(emailAdmin: string): Promise<IAdmin | null> {
    return AdminModel.findOne({ emailAdmin });
  }
}

export default new AdminRepository();
