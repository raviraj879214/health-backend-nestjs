import { Module } from '@nestjs/common';
import { RoleModule } from './roles/roles.module';
import { ModulesModule } from './modules/modules.module';
import { RoleModulesModule } from './role-modules/role-modules.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';
import { EmailtemplateModule } from './emailtemplates/emailtemplate.module';
import { AdminUserModule } from './admin-user-changes/v1/admin-user.module';
import { ActivityModule } from './admin-activities/v1/activity.module';


@Module({
 imports: [RoleModule, ModulesModule , RoleModulesModule , UsersModule , AuthModule , TestModule , EmailtemplateModule , AdminUserModule , ActivityModule],
})





export class AppModule {}
