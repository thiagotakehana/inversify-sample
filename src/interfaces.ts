interface ICustomerService {
    getCustomerById(id: string): { id: string; name: string; email: string };
}

export { ICustomerService };