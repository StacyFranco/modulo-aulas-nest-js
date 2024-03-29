import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ModuloModule } from './modulo/modulo.module'
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt.guar';
import { AulaModule } from './aula/aula.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    UserModule,
    ModuloModule,
    AulaModule
    
  ],
  controllers: [],
  providers: [
    {provide: APP_GUARD, useClass: JwtAuthGuard},
  ],
})
export class AppModule {}

