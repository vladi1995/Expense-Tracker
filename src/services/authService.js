import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    
    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
    };
};