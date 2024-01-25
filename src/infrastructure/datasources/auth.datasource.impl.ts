import { CustomError, RegisterUserDto, UserEntity } from "../../domain";
import { AuthDataSource } from "../../domain/datasources/auth.datasource";

export class AuthDataSourceImpl implements AuthDataSource {
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const {name, email, password } = registerUserDto;
        try {
            //1. Verificar si el correo existe
            //2. Hash de contrasenia
            //3. Mapear la respuesta de nuestra entidad
            return new UserEntity(
                '1',
                name,
                email,
                password,
                ['ADMIN_ROLE'],
            );
        } catch (error) {
            if(error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }
}