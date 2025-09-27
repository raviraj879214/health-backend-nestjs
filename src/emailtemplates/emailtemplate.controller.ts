
import { Controller, Post, Get, Patch, Delete, Param, Body, Version, Put, UseGuards } from '@nestjs/common';
import { EmailTemplateServics } from './emailtemplate.service';
import { UpdateEmailModule } from './dto/update-email-dto';
import { RolesGuard } from 'src/common/guards/roles.guards';
import { ModuleAccess } from 'src/common/decorators/module-access.decorator';




@Controller('api/email-templates')
@UseGuards(RolesGuard)


export class EmailtemplateController{


    constructor(private readonly emailtemplateService : EmailTemplateServics){}


    @Get()
    @ModuleAccess('Manage Email')
    @Version('1')
    getEmailtemplates(){
        return this.emailtemplateService.getEmailSubject();
    }

    @Put()
     @ModuleAccess('Manage Email')
     @Version('1')
     updateEmailbody(@Body() dto: UpdateEmailModule){
       
        return this.emailtemplateService.updateEmailTemplate(dto);
     }










}
