import { Group } from "../../Models/GroupModel";
import { IGroupRepository } from "../../Repositories/GroupRepository";

export class FindGroupByIdService {
  private readonly groupRepository: IGroupRepository;

  constructor(groupRepository: IGroupRepository) {
    this.groupRepository = groupRepository;
  }

  async execute(id: number): Promise<Group>{
    const group = await this.groupRepository.FindById(id)
    
    if(!group){
      throw new Error("Grupo não cadastrado")
    }

    return group
  }
}
