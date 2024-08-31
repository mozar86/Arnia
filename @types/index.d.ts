declare namespace Express {
    export interface Request {
      customer_code?: string;
    }
  }
  
  export interface Measure {
    measure_uuid: string;
    measure_datetime: Date;
    measure_type: 'WATER' | 'GAS';
    has_confirmed: boolean;
    image_url: string;
    measure_value: number;
  }
  