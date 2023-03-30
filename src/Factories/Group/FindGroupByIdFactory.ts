import { GroupRepository } from "../../Repositories/GroupRepository";
import { FindGroupByIdService } from "../../Services/Group/FindGroupByIdService";

export const makeFindGroupById = (): FindGroupByIdService => {
  const groupRepository = new GroupRepository();

  return new FindGroupByIdService(groupRepository);
};
