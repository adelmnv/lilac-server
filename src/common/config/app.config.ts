import * as dotenv from 'dotenv';
import { AppEnvironmental } from '../enums/app-environmentals.enum';

dotenv.config();

export default {
  appPort: process.env.APP_PORT || 4004,
  environment: process.env.APP_ENV || AppEnvironmental.Local,
};
