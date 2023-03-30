import { Group } from "../../Models/GroupModel";
import { IGroupRepository } from "../../Repositories/GroupRepository";

export class CreateGroupService {
  private readonly groupRepository: IGroupRepository;

  constructor(groupRepository: IGroupRepository) {
    this.groupRepository = groupRepository;
  }

  async execute(name: string): Promise<Group>{
    return await this.groupRepository.Create(name)
  }
}
