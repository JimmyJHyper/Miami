import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'aws-sdk/clients/budgets';
import { ROLES_KEY } from 'src/decorators/roles';
import { UserRepository } from 'src/modules/user/user.repository';
import { UserService } from 'src/modules/user/user.service';


// const matchRoles = (roles, userRoles) => {
//   return roles.some((role) => role === userRoles);
// };

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const roles = this.reflector.get<string[]>('roles', context.getHandler());
//     if (!roles) {
//       return true;
//     }
//     const req = context.switchToHttp().getRequest();
//     const user = req.user;
//     return matchRoles(roles, user.role);
//   }
// }


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

   canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    let { user } = context.switchToHttp().getRequest();


    if (!user) {
      console.error('No user found in the request');
      return false;
    }
    
    return requiredRoles.some((role) => user.role?.includes(role));
  }
}

