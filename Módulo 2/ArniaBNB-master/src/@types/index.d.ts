import { IRoom } from '../../entities/Room';

declare global {
  namespace Express {
    interface Request {
      room?: IRoom;
    }
  }
}
