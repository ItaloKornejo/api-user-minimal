import { Request, Response } from 'express';
import { IUser } from '../interfaces/user.interface';
import * as userService from '../services/user.service';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();

    if (!users) {
      res.status(404).json({ message: 'users were not found' });;
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = await userService.getUser(id);

    if (!user) {
      res.status(404).json({ message: `user with id=${id} was not found` });
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}


export const deleteUser = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const userDeleted = await userService.deleteUser(id);
      if (!userDeleted) {
        res.status(404).json({ message: `user DELETE with id=${id} can not be deleted` });
      } else {
        res.status(200).send(userDeleted);
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  }
  
  export const createUser = async (req: Request, res: Response) => {
    try {
      const iUser: IUser = req.body;
      const user = await userService.saveUser(iUser);
      res.status(200).send(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  }
  
  export const updateUser = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const user = req.body;
      const userUpdated = await userService.updateUser(id, user);
  
      if (!userUpdated) {
        res.status(404).json({ message: `user UPDATE with id=${id} can not be updated` });
      } else {
        res.status(200).send(userUpdated);
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  }
  