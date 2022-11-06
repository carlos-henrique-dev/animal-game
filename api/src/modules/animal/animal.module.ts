import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';

@Module({
  imports: [],
  controllers: [AnimalController],
  providers: [AnimalService, PrismaService],
  exports: [AnimalService],
})
export class AnimalModule {}
