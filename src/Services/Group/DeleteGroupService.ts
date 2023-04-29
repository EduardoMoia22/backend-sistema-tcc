import { IGroupRepository } from "../../Repositories/GroupRepository";

export class DeleteGroupService {
  private readonly groupRepository: IGroupRepository;

  constructor(groupRepository: IGroupRepository) {
    this.groupRepository = groupRepository;
  }

  async execute(id: number): Promise<void>{
    const group = await this.groupRepository.FindById(id)

    if(!group){
      throw new Error("Grupo não cadastrado")
    }

    return await this.groupRepository.Delete(id)
  }
}
