import { Group } from ".prisma/client";
import { IGroupRepository } from "../../Repositories/GroupRepository";

export class UpdateGroupService {
  private readonly groupRepository: IGroupRepository;

  constructor(groupRepository: IGroupRepository) {
    this.groupRepository = groupRepository;
  }

  async execute({id, name}: Group): Promise<Group>{
    const group = await this.groupRepository.FindById(id)

    if(!group){
      throw new Error("Grupo não cadastrado")
    }

    return await this.groupRepository.Update({id, name})
  }
}
