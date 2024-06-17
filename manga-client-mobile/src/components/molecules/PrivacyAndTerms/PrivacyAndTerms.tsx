import { FC } from "react";

import { CustomText } from "../../atoms";

import { COLORS } from "../../../styles/variables";

const PrivacyAndTerms: FC<{}> = () => {
  return (
    <CustomText textAlign="center" color={COLORS.grey}>
      By using the MangaClub you agree to its{" "}
      <CustomText color={COLORS.white} fontWeight="bold">
        Terms of Service
      </CustomText>{" "}
      and{" "}
      <CustomText color={COLORS.white} fontWeight="bold">
        Privacy Policy
      </CustomText>
      .
    </CustomText>
  );
};

export default PrivacyAndTerms;
