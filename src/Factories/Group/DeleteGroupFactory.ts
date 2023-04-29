import { GroupRepository } from "../../Repositories/GroupRepository";
import { DeleteGroupService } from "../../Services/Group/DeleteGroupService";

export const makeDeleteGroup = (): DeleteGroupService => {
  const groupRepository = new GroupRepository();

  return new DeleteGroupService(groupRepository);
};
