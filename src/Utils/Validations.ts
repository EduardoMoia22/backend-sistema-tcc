import { hash } from "bcrypt"

export function EmailValidation(email: string){
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  if (!emailRegex.test(email) ){
    throw new Error('Email inválido!')
  } 

  return
}

export function CPFValidation(cpf: string){
  let cpfRegex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/

  if (!cpfRegex.test(cpf)){
    cpf = cpf.replace( /\D/g , "")

    if(cpf.length == 11){
      cpf = cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
	    cpf = cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
	    //de novo (para o segundo bloco de números)
	    cpf = cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    
      return cpf
    } else {
      throw new Error("CPF Inválido!")
    }
  } else {
    return cpf
  }
}

export async function EncryptPassword(password: string): Promise<String | any>{
  try {
    const passwordHash = await hash(password, 8)
    return passwordHash
  } catch (error) {
    return error
  }
}

export async function CheckIfSaleIsOpen(open: boolean){
  if (!open){
    throw new Error("Não é possível fechar uma venda que já foi fechada.")
  }
}