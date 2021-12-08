import { v4 as uuidv4 } from 'uuid';

export const randomString = () => {
	return uuidv4();
};
