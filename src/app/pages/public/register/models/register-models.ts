export interface IUser {
  name: string,
  email: string,
  address: IAddress
}

export interface IAddress {
  street: string,
  num: number | 'N'
  complement: string,
  city: string,
  state: string,
  country: string,
  cep: number
}
