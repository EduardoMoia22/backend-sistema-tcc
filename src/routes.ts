import { Request, Response, Router } from "express";
import { CreateProductController } from "./controllers/Product/CreateProductController";
import { FindProductByIdController } from "./controllers/Product/FindProductByIdController";
import { ListAllProductsController } from "./controllers/Product/ListAllProductsController";
import { DeleteProductController } from "./controllers/Product/DeleteProductController";
import { UpdateProductController } from "./controllers/Product/UpdateProductController";
import { CreateClientController } from "./controllers/Client/CreateClientController";
import { FindClientController } from "./controllers/Client/FindClientController";
import { ListAllClientsController } from "./controllers/Client/ListAllClientsController";
import { DeleteClientController } from "./controllers/Client/DeleteClientController";
import { UpdateClientController } from "./controllers/Client/UpdateClientController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { isAuthenticated } from "./MIddlewares/isAuthenticated";
import { CreateSaleController } from "./controllers/Sale/CreateSaleController";
import { AddItemToSaleController } from "./controllers/Sale/AddItemToSaleController";
import { FindSaleByIdController } from "./controllers/Sale/FIndSaleByIdController";
import { ListAllSalesController } from "./controllers/Sale/ListAllSalesController";
import { ListItemsFromSaleByIdController } from "./controllers/Sale/ListItemsFromSaleByIdController";
import { AddNewPaymentMethodController } from "./controllers/PaymentMethods/AddNewPaymentMethodController";
import { listAllByPaymentMethodController } from "./controllers/Sale/ListAllByPaymentIDController";
import { AddAccountController } from "./controllers/AccountsReceivable/AddAccountController";
import { CloseSaleController } from "./controllers/Sale/CloseSaleController";
import { CloseAccountController } from "./controllers/AccountsReceivable/CloseAccountController";
import { ListAllAccountsController } from "./controllers/AccountsReceivable/LIstAllAccountsController";
import { ListAllPaymentsMethodsController } from "./controllers/PaymentMethods/ListAllPaymentsMethodsController";
import { DetailUserController } from "./controllers/User/DetailUserController";
import { ListAllUsersController } from "./controllers/User/ListAllUsersController";
import xmlparser from "express-xml-bodyparser";
import { CreateGroupController } from "./controllers/Group/CreateGroupController";
import { ListAllGroupsController } from "./controllers/Group/ListAllGroupsController";
import { FindGroupByIdController } from "./controllers/Group/FindGroupByIdController";
import { UpdateGroupController } from "./controllers/Group/UpdateGroupController";
import { DeleteGroupController } from "./controllers/Group/DeleteGroupController";

const router = Router();

// ========= ROTAS DE PRODUTOS =============
router.post(
  "/produto/cadastrar",
  isAuthenticated,
  new CreateProductController().handle
);
router.get(
  "/produto/:id",
  isAuthenticated,
  new FindProductByIdController().handle
);
router.get(
  "/produtos",
  isAuthenticated,
  new ListAllProductsController().handle
);
router.delete(
  "/produto/:id",
  isAuthenticated,
  new DeleteProductController().handle
);
router.put(
  "/produto/alterar",
  isAuthenticated,
  new UpdateProductController().handle
);

// ========= ROTAS DE CLIENTES =============
router.post(
  "/cliente/cadastrar",
  isAuthenticated,
  new CreateClientController().handle
);
router.get("/cliente/:id", isAuthenticated, new FindClientController().handle);
router.get(
  "/clientes/",
  isAuthenticated,
  new ListAllClientsController().handle
);
router.delete(
  "/cliente/:id",
  isAuthenticated,
  new DeleteClientController().handle
);
router.put(
  "/cliente/alterar",
  isAuthenticated,
  new UpdateClientController().handle
);

// =========== ROTAS DE VENDA ==============
router.post("/venda/abrir", isAuthenticated, new CreateSaleController().handle);
router.post(
  "/venda/item/adicionar",
  isAuthenticated,
  new AddItemToSaleController().handle
);
router.get("/venda", isAuthenticated, new FindSaleByIdController().handle);
router.get("/vendas", isAuthenticated, new ListAllSalesController().handle);
router.get(
  "/venda/itens",
  isAuthenticated,
  new ListItemsFromSaleByIdController().handle
);
router.get(
  "/vendas/forma-pagamento",
  isAuthenticated,
  new listAllByPaymentMethodController().handle
);
router.put("/venda/fechar", isAuthenticated, new CloseSaleController().handle);

// ========== ROTAS DE FORMAS DE PAGAMENTO ===========
router.post(
  "/formas-pagamento/cadastrar",
  isAuthenticated,
  new AddNewPaymentMethodController().handle
);
router.get(
  "/formas-pagamento",
  isAuthenticated,
  new ListAllPaymentsMethodsController().handle
);

// ========== ROTAS DE CONTAS A RECEBER ==============
router.post(
  "/contas-receber/adicionar",
  isAuthenticated,
  new AddAccountController().handle
);
router.get(
  "/contas-receber",
  isAuthenticated,
  new ListAllAccountsController().handle
);
router.put(
  "/contas-receber/fechar-venda",
  isAuthenticated,
  new CloseAccountController().handle
);

// ========== ROTAS DE GRUPOS =======================
router.post(
  "/grupo/cadastrar",
  isAuthenticated,
  new CreateGroupController().handle
);

router.get("/grupos", isAuthenticated, new ListAllGroupsController().handle);
router.get("/grupo/:id", isAuthenticated, new FindGroupByIdController().handle);
router.put(
  "/grupo/alterar",
  isAuthenticated,
  new UpdateGroupController().handle
);
router.delete(
  "/grupo/:id",
  isAuthenticated,
  new DeleteGroupController().handle
);

// ========= ROTAS DE TESTE DO XML ==================
router.post('/receive-xml', xmlparser({trim: false, explicitArray: false}), function(req, res, next) {
    const teste = req.body.nfe
    
    res.send(teste)
  });

// =========== ROTAS DE USUÁRIO ============
router.post("/registrar", new CreateUserController().handle)
router.post("/logar", new AuthUserController().handle)
router.get("/usuario", isAuthenticated, new DetailUserController().handle)
router.get("/usuarios", isAuthenticated, new ListAllUsersController().handle)
export {router}