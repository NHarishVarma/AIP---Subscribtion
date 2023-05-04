import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SubscribeListError.module.css";
const SubscribeListError: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/subscribe-question-1");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/subscribe-question-8");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/subscribe-question-2");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/subscribe-question-9");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/subscribe-question-3");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/subscribe-question-10");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/subscribe-question-4");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/subscribe-question-11");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/subscribe-question-5");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/subscribe-question-5-2");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/subscribe-question-6");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/subscribe-question-6");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/subscribe-question-7");
  }, [navigate]);

  const onGroupContainer14Click = useCallback(() => {
    navigate("/subscribe-question-7");
  }, [navigate]);

  const onComponent21287Click = useCallback(() => {
    navigate("/fund-detail-look-feel-01");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-detail-look-feel-01");
  }, [navigate]);

  const onLeftNavButtonClick = useCallback(() => {
    navigate("/marketplace-look-feel-2");
  }, [navigate]);

  return (
    <div className={styles.subscribeListError}>
      <img className={styles.maskGroup35} alt="" src="/mask-group-35@2x.png" />
      <div className={styles.consumerGoodsRetailEnhancemParent}>
        <div className={styles.consumerGoodsRetailEnhancem}>
          Consumer Goods Retail Enhancement Fund
        </div>
        <div
          className={styles.marketplacePrivate}
        >{`Marketplace > Private Equity Funds`}</div>
        <div className={styles.label}>
          <b className={styles.labelcontent}>New</b>
        </div>
      </div>
      <div className={styles.subscribeListErrorChild} />
      <div
        className={styles.loremIpsumDolor}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet odio accumsan arcu posuere venenatis quis nec mauris. Nam consequat ullamcorper nisl, et blandit dolor blandit eget. Pellentesque id dictum erat. Vivamus risus odio, gravida vitae laoreet et, laoreet et arcu. Nullam felis erat, efficitur id gravida porttitor, aliquet non metus. Sed imperdiet id ex ut auctor. Aenean nisi felis, suscipit laoreet cursus eget, auctor ut ipsum. Nullam ipsum magna, elementum a volutpat vitae. `}</div>
      <div
        className={styles.investorProfileInformationParent}
        onClick={onGroupContainer1Click}
      >
        <div className={styles.investorProfile}>
          Investor Profile Information​
        </div>
        <div className={styles.step1}>Step 1</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.badActorDisqualificationParent}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.badActorDisqualification}>
          “BAD ACTOR” DISQUALIFICATION​
        </div>
        <div className={styles.step8}>Step 8</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.capitalCommitmentsParent}
        onClick={onGroupContainer3Click}
      >
        <div className={styles.investorProfile}>Capital Commitments ​</div>
        <div className={styles.step1}>Step 2</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.accreditedInvestorRepresentaParent}
        onClick={onGroupContainer4Click}
      >
        <div className={styles.badActorDisqualification}>
          ACCREDITED INVESTOR REPRESENTATIONS​
        </div>
        <div className={styles.step8}>Step 9</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.authorizedSignaturesParent}
        onClick={onGroupContainer5Click}
      >
        <div className={styles.investorProfile}>Authorized Signatures</div>
        <div className={styles.step1}>Step 3</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.qualifiedPurchaserRepresentaParent}
        onClick={onGroupContainer6Click}
      >
        <div className={styles.badActorDisqualification}>
          QUALIFIED PURCHASER REPRESENTATIONS​
        </div>
        <div className={styles.step8}>Step 10</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.contactInformationParent}
        onClick={onGroupContainer7Click}
      >
        <div className={styles.investorProfile}>Contact Information</div>
        <div className={styles.step1}>Step 4</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.cfiusForeignPersonStatusReParent}
        onClick={onGroupContainer8Click}
      >
        <div className={styles.cfiusForeignPersonContainer}>
          <span className={styles.cfius}>CFIUS</span>
          <span className={styles.foreignPersonStatus}>
            {" "}
            FOREIGN PERSON STATUS REPRESENTATION​
          </span>
        </div>
        <div className={styles.step8}>Step 11</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.bankInformationParent}
        onClick={onGroupContainer9Click}
      >
        <div className={styles.cfiusForeignPersonContainer}>
          Bank Information
        </div>
        <div className={styles.step8}>Step 5</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.finraNewIssuesQuestionnaireParent}
        onClick={onGroupContainer10Click}
      >
        <div className={styles.cfiusForeignPersonContainer}>
          <span className={styles.cfius}>FINRA</span>
          <span className={styles.foreignPersonStatus}>
            {" "}
            NEW ISSUES QUESTIONNAIRE​
          </span>
        </div>
        <div className={styles.step12}>Step 12</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.identificationOfInvestorStaParent}
        onClick={onGroupContainer11Click}
      >
        <div className={styles.badActorDisqualification}>
          IDENTIFICATION OF INVESTOR STATUS​
        </div>
        <div className={styles.step8}>Step 6</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.wiringBankStatusParent}
        onClick={onGroupContainer12Click}
      >
        <div className={styles.badActorDisqualification}>
          WIRING BANK STATUS​
        </div>
        <div className={styles.step8}>Step 13</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.foiaPartnerPublicDisclosuParent}
        onClick={onGroupContainer13Click}
      >
        <div className={styles.cfiusForeignPersonContainer}>
          <span className={styles.cfius}>FOIA</span>
          <span className={styles.foreignPersonStatus}>
            {" "}
            PARTNER / PUBLIC DISCLOSURE LAWS​
          </span>
        </div>
        <div className={styles.step8}>Step 7</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div
        className={styles.identificationOfSpecialEntiParent}
        onClick={onGroupContainer14Click}
      >
        <div className={styles.badActorDisqualification}>
          IDENTIFICATION OF SPECIAL ENTITIES​
        </div>
        <div className={styles.step8}>Step 14</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div className={styles.component21286}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalChild} />
          <div className={styles.submit}>Submit</div>
        </div>
      </div>
      <div className={styles.component21287} onClick={onComponent21287Click}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalItem} />
          <div className={styles.cancel}>Cancel</div>
        </div>
      </div>
      <img
        className={styles.backArrowButton}
        alt=""
        src="/back-arrow-button.svg"
        onClick={onBackArrowButtonClick}
      />
      <div className={styles.subscribeToFund}>Subscribe to Fund</div>
      <div className={styles.subscriptionSteps}>Subscription Steps</div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormal}>
              <div className={styles.alternativeInvestmentPlatforContainer}>
                Al
                <span className={styles.t}>t</span>ernati
                <span className={styles.v}>v</span>e
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchParent}>
          <div className={styles.search}>Search</div>
          <img
            className={styles.iconactionsearch24px}
            alt=""
            src="/iconactionsearch-24px.svg"
          />
        </div>
      </div>
      <img
        className={styles.component20928}
        alt=""
        src="/component-209--1.svg"
      />
      <div className={styles.groupContainer}>
        <div className={styles.buttonNormalChild}>
          <img className={styles.polygonIcon} alt="" src="/polygon-8.svg" />
        </div>
        <div className={styles.startHere}>Start Here</div>
      </div>
      <div className={styles.navDrawerLeft}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormal}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div
              className={styles.leftNavButton}
              onClick={onLeftNavButtonClick}
            >
              <div className={styles.leftNavButtonChild} />
              <div className={styles.buttonNormal} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.buttonNormal} />
              <img
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.leftNavButtonChild1}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.buttonNormal}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.buttonNormal}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.buttonNormal}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.buttonNormal} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.buttonNormal} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.buttonNormal} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
              />
            </div>
            <div className={styles.leftNavClosedChild} />
            <div className={styles.closedMenuIcon}>
              <div className={styles.closedMenuIconChild} />
              <div className={styles.closedMenuIconItem} />
              <div className={styles.closedMenuIconInner} />
              <img
                className={styles.chevronRightFill0Wght400GrIcon}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeListError;
