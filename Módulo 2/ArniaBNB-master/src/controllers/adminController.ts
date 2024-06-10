import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { adminAuthCreateBodySchema } from '../schemas/admin';
import * as Yup from 'yup';
import { AdminModel } from '../models/AdminModel';

export const loginAdmin = async (req: Request, res: Response) => {
    try {
        console.log('Validating request body...');
        await adminAuthCreateBodySchema.validate(req.body);

        const { emailAdmin, passwordAdmin } = req.body;
        console.log(`Finding admin with email: ${emailAdmin}`);
        const admin = await AdminModel.findOne({ emailAdmin });
        
        if (!admin) {
            console.log('Admin not found');
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log('Admin found, checking password...');
        const isMatch = await bcrypt.compare(passwordAdmin, admin.passwordAdmin);
        if (!isMatch) {
            console.log('Password does not match');
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log('Password matches, generating token...');
        const token = jwt.sign({ id: admin.id, role: 'admin' }, process.env.SECRET_KEY as string, {
            expiresIn: '1h',
        });

        console.log('Token generated successfully');
        res.json({ token });
    } catch (err) {
        console.error('Error during login:', err);
        if (err instanceof Yup.ValidationError) {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: 'Server error' });
    }
};
