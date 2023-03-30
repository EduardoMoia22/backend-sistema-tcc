import { prisma } from ".prisma/client";
import { IGroupRepository } from "../../Repositories/GroupRepository";

export class DeleteGroupService {
  private readonly groupRepository: IGroupRepository;

  constructor(groupRepository: IGroupRepository) {
    this.groupRepository = groupRepository;
  }

  async execute(id: number): Promise<void>{
    return await this.groupRepository.Delete(id)
  }
}
