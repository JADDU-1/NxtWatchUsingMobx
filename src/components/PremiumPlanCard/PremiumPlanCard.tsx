import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import {
  PremiumPlanCardContainer,
  NXTLogoAndCloseButtonContainer,
  NXTLogo,
  CloseIcon,
  BuyNxtWatchText,
  GetButton,
} from "./styledComponents";

interface PremiumPlanCardPropTypes extends WithTranslation {
  onChangeBannerCardStatus: () => void;
  shouldShowBannerCard: boolean;
}

const PremiumPlanCard = (props: PremiumPlanCardPropTypes) => {
  const { t, onChangeBannerCardStatus, shouldShowBannerCard } = props;

  return (
    <>
      {shouldShowBannerCard && (
        <PremiumPlanCardContainer>
          <NXTLogoAndCloseButtonContainer>
            <NXTLogo />
            <CloseIcon onClick={onChangeBannerCardStatus} />
          </NXTLogoAndCloseButtonContainer>
          <BuyNxtWatchText>{t("homePage.buyPremiumPlansText")}</BuyNxtWatchText>
          <GetButton>{t("homePage.getItNowButtonText")}</GetButton>
        </PremiumPlanCardContainer>
      )}
    </>
  );
};

export default withTranslation()(PremiumPlanCard);
