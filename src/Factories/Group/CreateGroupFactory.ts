import { GroupRepository } from "../../Repositories/GroupRepository";
import { CreateGroupService } from "../../Services/Group/CreateGroupService";

export const makeCreateGroup = (): CreateGroupService => {
  const groupRepository = new GroupRepository();

  return new CreateGroupService(groupRepository);
};
