import { GroupRepository } from "../../Repositories/GroupRepository";
import { ListAllGroupsService } from "../../Services/Group/ListAllGroupsService";

export const makeListAllGroups = (): ListAllGroupsService => {
  const groupRepository = new GroupRepository()

  return new ListAllGroupsService(groupRepository)
}