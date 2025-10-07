import { Request } from 'express';
import { File } from 'multer';

export interface BlogRequest extends Request {


  file?: File;

  
  body: {
    id ? :string;
    title?: string;
    content?: string;
    [key: string]: any;
    
  };
}
