import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SubscribeConfirm.module.css";
const SubscribeConfirm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLeftNavButtonClick = useCallback(() => {
    navigate("/marketplace-look-feel-2");
  }, [navigate]);

  const onGroupContainer25Click = useCallback(() => {
    navigate("/subscribe-sign-docs");
  }, [navigate]);

  const onGroupContainer26Click = useCallback(() => {
    navigate("/subscribe-question-141");
  }, [navigate]);

  return (
    <div className={styles.subscribeConfirm}>
      <img className={styles.maskGroup35} alt="" src="/mask-group-35@2x.png" />
      <div className={styles.marketplacePrivateEquityFParent}>
        <div
          className={styles.marketplacePrivate}
        >{`Marketplace > Private Equity Funds`}</div>
        <div className={styles.consumerGoodsRetailEnhancem}>
          Consumer Goods Retail Enhancement Fund
        </div>
        <div className={styles.label}>
          <b className={styles.labelcontent}>New</b>
        </div>
      </div>
      <img className={styles.path11176Icon} alt="" src="/path-11176.svg" />
      <div className={styles.path11175Parent}>
        <img className={styles.path11175Icon} alt="" src="/path-11175.svg" />
        <div className={styles.investorProfile}>
          Investor Profile Information​
        </div>
        <div className={styles.step1}>Step 1</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.badActorDisqualificationParent}>
        <div className={styles.badActorDisqualification}>
          “BAD ACTOR” DISQUALIFICATION​
        </div>
        <div className={styles.step8}>Step 8</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.capitalCommitmentsParent}>
        <div className={styles.investorProfile}>Capital Commitments ​</div>
        <div className={styles.step1}>Step 2</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.accreditedInvestorRepresentaParent}>
        <div className={styles.badActorDisqualification}>
          ACCREDITED INVESTOR REPRESENTATIONS​
        </div>
        <div className={styles.step8}>Step 9</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.authorizedSignaturesParent}>
        <div className={styles.investorProfile}>Authorized Signatures</div>
        <div className={styles.step1}>Step 3</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.qualifiedPurchaserRepresentaParent}>
        <div className={styles.badActorDisqualification}>
          QUALIFIED PURCHASER REPRESENTATIONS​
        </div>
        <div className={styles.step8}>Step 10</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.contactInformationParent}>
        <div className={styles.investorProfile}>Contact Information</div>
        <div className={styles.step1}>Step 4</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.cfiusForeignPersonStatusReParent}>
        <div className={styles.cfiusForeignPersonContainer}>
          <span className={styles.cfius}>CFIUS</span>
          <span className={styles.foreignPersonStatus}>
            {" "}
            FOREIGN PERSON STATUS REPRESENTATION​
          </span>
        </div>
        <div className={styles.step8}>Step 11</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.bankInformationParent}>
        <div className={styles.cfiusForeignPersonContainer}>
          Bank Information
        </div>
        <div className={styles.step8}>Step 5</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.finraNewIssuesQuestionnaireParent}>
        <div className={styles.cfiusForeignPersonContainer}>
          <span className={styles.cfius}>FINRA</span>
          <span className={styles.foreignPersonStatus}>
            {" "}
            NEW ISSUES QUESTIONNAIRE​
          </span>
        </div>
        <div className={styles.step12}>Step 12</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.identificationOfInvestorStaParent}>
        <div className={styles.badActorDisqualification}>
          IDENTIFICATION OF INVESTOR STATUS​
        </div>
        <div className={styles.step8}>Step 6</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.wiringBankStatusParent}>
        <div className={styles.badActorDisqualification}>
          WIRING BANK STATUS​
        </div>
        <div className={styles.step8}>Step 13</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.foiaPartnerPublicDisclosuParent}>
        <div className={styles.cfiusForeignPersonContainer}>
          <span className={styles.cfius}>FOIA</span>
          <span className={styles.foreignPersonStatus}>
            {" "}
            PARTNER / PUBLIC DISCLOSURE LAWS​
          </span>
        </div>
        <div className={styles.step8}>Step 7</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.identificationOfSpecialEntiParent}>
        <div className={styles.badActorDisqualification}>
          IDENTIFICATION OF SPECIAL ENTITIES​
        </div>
        <div className={styles.step8}>Step 14</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
        <img
          className={styles.groupChild}
          alt=""
          src="/check-circle-fill1-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.subscriptionSteps}>Subscription Steps</div>
      <div
        className={styles.loremIpsumDolor}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet odio accumsan arcu posuere venenatis quis nec mauris. Nam consequat ullamcorper nisl, et blandit dolor blandit eget. Pellentesque id dictum erat. Vivamus risus odio, gravida vitae laoreet et, laoreet et arcu. Nullam felis erat, efficitur id gravida porttitor, aliquet non metus. Sed imperdiet id ex ut auctor. Aenean nisi felis, suscipit laoreet cursus eget, auctor ut ipsum. Nullam ipsum magna, elementum a volutpat vitae. `}</div>
      <div className={styles.component21281}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalChild} />
          <div className={styles.submit}>Submit</div>
        </div>
      </div>
      <div className={styles.component21282}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalItem} />
          <div className={styles.cancel}>Cancel</div>
        </div>
      </div>
      <img
        className={styles.backArrowButton}
        alt=""
        src="/back-arrow-button.svg"
      />
      <div className={styles.subscribeToFund}>Subscribe to Fund</div>
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
        className={styles.component20926}
        alt=""
        src="/component-209--1.svg"
      />
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
      <div className={styles.subscribeConfirmChild} />
      <div className={styles.groupContainer}>
        <div className={styles.buttonNormal}>
          <div className={styles.bg} />
          <img
            className={styles.iconMaterialClose}
            alt=""
            src="/icon-materialclose.svg"
          />
        </div>
        <b className={styles.logo}>Confirmation</b>
        <div className={styles.groupParent1} onClick={onGroupContainer25Click}>
          <img className={styles.groupChild11} alt="" src="/group-175472.svg" />
          <div className={styles.next}>Next</div>
        </div>
        <div className={styles.groupParent2} onClick={onGroupContainer26Click}>
          <img
            className={styles.groupChild12}
            alt=""
            src="/group-1754711.svg"
          />
          <div className={styles.previous}>Previous</div>
        </div>
        <div className={styles.carefullyReviewYourContainer}>
          <p className={styles.carefullyReviewYour}>
            Carefully review your responses to the Investor Questionnaire before
            moving forward​.
          </p>
          <p className={styles.carefullyReviewYour}>&nbsp;</p>
          <p className={styles.carefullyReviewYour}>
            I confirm I have carefully reviewed my responses to the Investor
            Questionnaire​
          </p>
        </div>
        <div className={styles.yesParent}>
          <div className={styles.yes}>Yes</div>
          <div className={styles.no}>No</div>
          <img
            className={styles.lightSelectionControls2}
            alt=""
            src="/light--selection-controls2-radiob-deselected5-states.svg"
          />
          <img
            className={styles.lightSelectionControls21}
            alt=""
            src="/light--selection-controls2-radiob-deselected5-states.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeConfirm;
