import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../users/domain/users.service';
import { JwtService } from '@nestjs/jwt';
//import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateTelegramLogin(payload: any): Promise<any> {
    const { username, first_name } = payload;

    if (!this.isValidTelegramPayload(payload)) {
      throw new UnauthorizedException('Invalid Telegram login payload');
    }

    let user = await this.usersService.findOneByNickname(username);
    if (!user) {
      user = await this.usersService.create({
        telegramNickname: username,
        name: first_name,
      });
    }

    return {
      accessToken: this.jwtService.sign({
        id: user.id,
        username: user.telegramNickname,
      }),
    };
  }

  private isValidTelegramPayload(payload: any): boolean {
    if (payload) {
      return true;
    }

    //     if (!payload || !payload.hash) {
    //       return false;
    //     }

    //     const { hash, ...data } = payload;
    //     const sortedKeys = Object.keys(data).sort();

    //     const dataString = sortedKeys
    //       .map((key) => `${key}=${data[key]}`)
    //       .join('\n');

    //     const botToken = process.env.TELEGRAM_BOT_TOKEN;
    //     if (!botToken) {
    //       throw new Error(
    //         'Telegram bot token is not defined in environment variables',
    //       );
    //     }

    //     const secretKey = crypto.createHash('sha256').update(botToken).digest();
    //     const computedHash = crypto
    //       .createHmac('sha256', secretKey)
    //       .update(dataString)
    //       .digest('hex');

    //     return crypto.timingSafeEqual(Buffer.from(computedHash), Buffer.from(hash));
  }
}
