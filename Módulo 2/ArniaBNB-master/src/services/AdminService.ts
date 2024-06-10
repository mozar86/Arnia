import AdminRepository from '../repositories/AdminRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Document } from 'mongoose';
import { IAdmin } from '../entities/Admin';

interface IAdminDocument extends IAdmin, Document {
  passwordAdmin: string;
  _id: string; 
}

class AdminService {
  async login(emailAdmin: string, passwordAdmin: string): Promise<{ token: string } | null> {
    const admin = await AdminRepository.findByEmail(emailAdmin) as IAdminDocument | null;
    if (!admin) {
      return null;
    }

    const isMatch = await bcrypt.compare(passwordAdmin, admin.passwordAdmin);
    if (!isMatch) {
      return null;
    }

    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.SECRET_KEY as string, {
      expiresIn: '1h',
    });

    return { token };
  }
}

export default new AdminService();
