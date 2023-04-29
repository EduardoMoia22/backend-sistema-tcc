import { Group } from "../../Models/GroupModel";
import { IGroupRepository } from "../../Repositories/GroupRepository";

export class ListAllGroupsService {
  private readonly groupRepository: IGroupRepository;

  constructor(groupRepository: IGroupRepository) {
    this.groupRepository = groupRepository;
  }

  async execute(): Promise<Group[]>{
    return await this.groupRepository.ListAll()
  }
}
