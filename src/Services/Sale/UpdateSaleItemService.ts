import { IItemRepository } from "../../Repositories/ItemRepository";

type UpdateSaleItemProps = {
  id: string;
  amount: number;
};

export class UpdateSaleItemService {
  private readonly itemRepository: IItemRepository;

  constructor(itemRepository: IItemRepository) {
    this.itemRepository = itemRepository;
  }

  public async execute({ id, amount }: UpdateSaleItemProps) {
    const item = await this.itemRepository.FindById(id);

    if (!item) {
      throw new Error("Produto não esta contido na venda");
    }

    return await this.itemRepository.Update({ id, amount });
  }
}
