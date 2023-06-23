import { Request, Response } from "express";
import { NF } from "../../Models/NFModel";

export class testeNF {
  public async handle(req: Request, res: Response) {
    const nfeInfo = req.body.nfeproc.nfe.infnfe;
    const nf = new NF(
      {
        cnpj: nfeInfo.emit.cnpj,
        xNome: nfeInfo.emit.xnome,
        xFant: nfeInfo.emit.xfant,
        xLgr: nfeInfo.emit.enderemit.xlgr,
        nro: nfeInfo.emit.enderemit.nro,
        xBairro: nfeInfo.emit.enderemit.xbairro,
        cMun: nfeInfo.emit.enderemit.cmun,
        xMun: nfeInfo.emit.enderemit.xmun,
        UF: nfeInfo.emit.enderemit.uf,
        CEP: nfeInfo.emit.enderemit.cep,
        cPais: nfeInfo.emit.enderemit.cpais,
        xPais: nfeInfo.emit.enderemit.xpais,
        fone: nfeInfo.emit.enderemit.fone,
        IE: nfeInfo.emit.ie,
        IEST: nfeInfo.emit.iest,
        IM: nfeInfo.emit.im,
        CNAE: nfeInfo.emit.cnae,
        CRT: nfeInfo.emit.crt
      },
      {
        CPF: nfeInfo.dest.cpf,
        xNome: nfeInfo.dest.xnome,
        xLgr: nfeInfo.dest.enderdest.xlgr,
        nro: nfeInfo.dest.enderdest.nro,
        xCpl: nfeInfo.dest.enderdest.xcpl,
        xBairro: nfeInfo.dest.enderdest.xbairro,
        cMun: nfeInfo.dest.enderdest.cmun,
        xMun: nfeInfo.dest.enderdest.xmun,
        cPais: nfeInfo.dest.enderdest.cpais,
        xPais: nfeInfo.dest.enderdest.xpais,
        CEP: nfeInfo.dest.enderdest.cep,
        UF: nfeInfo.dest.enderdest.uf,
        fone: nfeInfo.dest.enderdest.fone,
        email: nfeInfo.dest.email
      },
      {
        cProd: nfeInfo.det.prod.cprod,
        cEAN: nfeInfo.det.prod.cean,
        xProd: nfeInfo.det.prod.xprod,
        NCM: nfeInfo.det.prod.ncm,
        CFOP: nfeInfo.det.prod.cfop,
        uCom: nfeInfo.det.prod.ucom,
        qCom: nfeInfo.det.prod.qcom,
        vUnCom: nfeInfo.det.prod.vuncom,
        vProd: nfeInfo.det.prod.vprod,
        cEANTrib: nfeInfo.det.prod.ceantrib,
        uTrib: nfeInfo.det.prod.utrib,
        qTrib: nfeInfo.det.prod.qtrib,
        vUnTrib: nfeInfo.det.prod.vuntrib,
        vDesc: nfeInfo.det.prod.vdesc,
        indTot: nfeInfo.det.prod.indtot,
        nItemPed: nfeInfo.det.prod.nitemped
      }
    );
    console.log(nf)
  }
}