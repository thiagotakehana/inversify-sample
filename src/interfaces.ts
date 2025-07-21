interface ICustomerService {
    getCustomerById(id: string): { id: string; name: string; email: string };
}

interface IFactoryCustomerService {
    getCustomerById(id: string): { id: string; name: string; email: string };
}

export { ICustomerService, IFactoryCustomerService };