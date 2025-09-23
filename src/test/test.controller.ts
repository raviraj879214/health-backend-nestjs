// src/test/test.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ModuleAccess } from '../common/decorators/module-access.decorator';
import { RolesGuard } from 'src/common/guards/roles.guards';



@Controller('test')
@UseGuards(RolesGuard) // apply guard to all routes here
export class TestController {
  
  @Get('public')
  publicRoute() {
    return { message: 'This route is public for all logged-in users' };
  }

  @Get('products')
  
  @ModuleAccess('Orders') // only users with Products module can access

  restrictedProducts()
  {
    return { message: 'You have access to Products module' };
  }

  @Get('orders')
  @ModuleAccess('Orders') // only users with Orders module
  restrictedOrders() {
    return { message: 'You have access to Orders module' };
  }
}
