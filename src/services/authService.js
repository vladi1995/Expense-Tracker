import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const authServiceFactory = () => {
    const request = requestFactory();

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
    };
};