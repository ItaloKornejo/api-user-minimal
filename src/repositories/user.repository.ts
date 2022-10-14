import { appDataSource } from '../data-source';
import { User } from '../entities/user.entity';

const userRepository = appDataSource.getRepository(User);

export default userRepository;