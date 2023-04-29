import { IItemRepository } from "../../Repositories/ItemRepository";

export class DeleteSaleItemService {
  private readonly itemRepository: IItemRepository;

  constructor(itemRepository: IItemRepository) {
    this.itemRepository = itemRepository;
  }

  public async execute(id: string): Promise<void> {
    return await this.itemRepository.Delete(id);
  }
}
