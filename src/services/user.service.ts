import { User } from '../entities/user.entity';
import { IUser } from '../interfaces/user.interface';
import userRepository from '../repositories/user.repository';


export const getUsers = async () => {
  const users = await userRepository.find();
  return users ? users : null;
}

export const getUser = async (id: number) => {
  const user = await userRepository.findOneBy({ id });
  return user ? user : null;
}

export const deleteUser = async (id: number) => {
    const user = await userRepository.findOneBy({ id });
    if (user) {
      return await userRepository.delete(user.id) ? user : null;
    } else {
      return null;
    }
  }
  
  export const saveUser = async (iUser: IUser) => {
    const user = new User();
    user.email = iUser.email;
    user.password = iUser.password;
    user.firstname = iUser.firstname;
    user.lastname = iUser.lastname;
    user.birthday = iUser.birthday;
  
    return await userRepository.save(user);
  }
  
  export const updateUser = async (id: number, iUser: IUser) => {
    const user = await userRepository.findOneBy({ id });
    if (user) {
      const userUpdated = new User();
      userUpdated.firstname = iUser.firstname;
      userUpdated.lastname = iUser.lastname;
  
      return await userRepository.update(user.id, userUpdated) ? userUpdated : null;
    } else {
      return null;
    }
  }
  