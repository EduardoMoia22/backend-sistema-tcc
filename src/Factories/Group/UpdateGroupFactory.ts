import { GroupRepository } from "../../Repositories/GroupRepository";
import { UpdateGroupService } from "../../Services/Group/UpdateGroupService";

export const makeUpdateGroup = (): UpdateGroupService => {
  const groupRepository = new GroupRepository()

  return new UpdateGroupService(groupRepository)
}