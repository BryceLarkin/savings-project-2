import { Photon } from "@generated/photon";
import * as _ from "lodash";

export const isUserPartOfCompany = async (
  photon: Photon,
  userId: string,
  companyId: string
) => {
  try {
    const user = await photon.users.findOne({
      where: { id: userId },
      select: { company: { select: { id: true } } }
    });

    const userCompanyId = user.company.id;

    return userCompanyId === companyId;
  } catch (e) {
    return false;
  }
};
