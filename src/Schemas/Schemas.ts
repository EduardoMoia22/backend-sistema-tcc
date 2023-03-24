export type ProductSchema = {
  name: string
  bar_code: string
  reference: string
  manufacturerID: number
  groupID: number
  price: number
  description: string
  stockID: number
}

export type ProductSchemaWithId = {
  id: number
  name: string
  price: number
  description: string
}

export type ClientSchema = {
  name: string
  fantasy: string
  cpf?: string
  cnpj?: string
  fundation: string
  birthday: string
}

export type CLienteSchemaWithId = {
  id: number
  name: string
  fantasy: string
  cpf?: string
  cnpj?: string
  fundation: string
  birthday: string
}

export type ClientSchemaWithFormatedCPF = {
  name: string
  fantasy: string
  formatedCPF?: string
  cnpj?: string
  fundation: string
  birthday: string
}

export type UserSchema = {
  name: string
  email: string
  password: string
}

export type UserResponseSchema = {
  name: string
  email: string
}

export type UserSchemaWithId = {
  id: string
  name: string
  email: string
  password: string
}

export type UserSchemaWithHashPassword = {
  name: string
  email: string
  hashPassword: string
}

export type ItemSchema = {
  amount: number
  productID: number
  saleID: string
}

export type SaleSchema = {
  paymentID: number
  open: boolean
  clientID?: number
}

export type StockSchema = {
  stockMin: number
  stock: number
}

export type ProductSchemaWithStockSchema = {
  name: string
  bar_code: string
  reference: string
  manufacturerID: number
  groupID: number
  price: number
  description: string
  stockMin: number
  stock: number
}