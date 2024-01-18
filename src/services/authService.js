import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const authServiceFactory = () => {
    const request = requestFactory();

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
    };
};