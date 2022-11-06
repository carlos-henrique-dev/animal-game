import {
  Controller,
  Get,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { animal as AnimalModel } from '@prisma/client';
import { FindAnimalsDTO } from './dto/find-animals';
import { FindAnimalDto } from './dto/find-animal';

@Controller()
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get('animal')
  async findAnimals(
    @Param()
    filters: FindAnimalsDTO,
  ): Promise<AnimalModel[]> {
    return this.animalService.games(filters);
  }

  @Get('animal/:name')
  async findGame(
    @Param()
    params: FindAnimalDto,
  ): Promise<AnimalModel> {
    const animal = await this.animalService.game({ name: params.name });

    if (!animal) {
      throw new HttpException('Animal does not exist', HttpStatus.BAD_REQUEST);
    }

    return animal;
  }
}
