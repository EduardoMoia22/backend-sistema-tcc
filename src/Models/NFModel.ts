export class NF {
  public readonly id: string;
  public emitente: Emitente;
  public destinatario: Destinatario;
  public produto: Produto[] = [];

  constructor(emitente: Emitente, destinatario: Destinatario, prod: Produto) {
    this.id = 'a';
    this.emitente = emitente
    this.destinatario = destinatario
    this.produto.push(prod);
  }
}

class Emitente {
  public cnpj: string;
  public xNome: string;
  public xFant: string;
  public xLgr: string;
  public nro: string;
  public xBairro: string;
  public cMun: number;
  public xMun: string;
  public UF: string;
  public CEP: string;
  public cPais: number;
  public xPais: string;
  public fone: number;
  public IE: string;
  public IEST: string;
  public IM: string;
  public CNAE: string;
  public CRT: string;
  constructor(
    props: {
      cnpj: string
      xNome: string
      xFant: string
      xLgr: string
      nro: string
      xBairro: string
      cMun: number
      xMun: string
      UF: string
      CEP: string
      cPais: number
      xPais: string
      fone: number
      IE: string
      IEST: string
      IM: string
      CNAE: string
      CRT: string
    }
  ) {
    this.cnpj = props.cnpj
    this.xNome = props.xNome
    this.xFant = props.xFant
    this.xLgr = props.xLgr
    this.nro = props.nro
    this.xBairro = props.xBairro
    this.cMun = props.cMun
    this.xMun = props.xMun
    this.UF = props.UF
    this.CEP = props.CEP
    this.cPais = props.cPais
    this.xPais = props.xPais
    this.fone = props.fone
    this.IE = props.IE
    this.IEST = props.IEST
    this.IM = props.IM
    this.CNAE = props.CNAE
    this.CRT = props.CRT
  }
}

class Destinatario {
  public CPF: string;
  public xNome: string;
  public xLgr: string;
  public nro: string;
  public xCpl: string;
  public xBairro: string;
  public cMun: number;
  public xMun: string;
  public UF: string;
  public CEP: string;
  public cPais: number;
  public xPais: string;
  public fone: number;
  public email: string;

  constructor(
    props: {
      CPF: string
      xNome: string
      xLgr: string
      nro: string
      xCpl: string
      xBairro: string
      cMun: number
      xMun: string
      UF: string
      CEP: string
      cPais: number
      xPais: string
      fone: number
      email: string
    }
  ) {
    this.CPF = props.CPF
    this.xNome = props.xNome
    this.xLgr = props.xLgr
    this.nro = props.nro
    this.xCpl = props.xCpl
    this.xBairro = props.xBairro
    this.cMun = props.cMun
    this.xMun = props.xMun
    this.UF = props.UF
    this.CEP = props.CEP
    this.cPais = props.cPais
    this.xPais = props.xPais
    this.fone = props.fone
    this.email = props.email
  }
}

class Produto {
  public cProd: string;
  public cEAN: string;
  public xProd: string;
  public NCM: number;
  public CFOP: number;
  public uCom: string;
  public qCom: number;
  public vUnCom: number;
  public vProd: number;
  public cEANTrib: string;
  public uTrib: string;
  public qTrib: number;
  public vUnTrib: number;
  public vDesc: number;
  public indTot: number;
  public nItemPed: number;
  constructor(
    props: {
      cProd: string,
      cEAN: string,
      xProd: string,
      NCM: number,
      CFOP: number,
      uCom: string,
      qCom: number,
      vUnCom: number,
      vProd: number,
      cEANTrib: string,
      uTrib: string,
      qTrib: number,
      vUnTrib: number,
      vDesc: number,
      indTot: number,
      nItemPed: number
    }
  ) {
    this.cProd = props.cProd
    this.cEAN = props.cEAN
    this.xProd = props.xProd
    this.NCM = props.NCM
    this.CFOP = props.CFOP
    this.uCom = props.uCom
    this.qCom = props.qCom
    this.vUnCom = props.vUnCom
    this.vProd = props.vProd
    this.cEANTrib = props.cEANTrib
    this.uTrib = props.uTrib
    this.qTrib = props.qTrib
    this.vUnTrib = props.vUnTrib
    this.vDesc = props.vDesc
    this.indTot = props.indTot
    this.nItemPed = props.nItemPed
  }
}

