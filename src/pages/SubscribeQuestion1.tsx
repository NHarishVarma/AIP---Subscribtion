import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SubscribeQuestion1.module.css";
const SubscribeQuestion1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLeftNavButtonClick = useCallback(() => {
    navigate("/marketplace-look-feel-2");
  }, [navigate]);

  const onIconMaterialCloseClick = useCallback(() => {
    navigate("/subscribe-list-2");
  }, [navigate]);

  const onGroupContainer35Click = useCallback(() => {
    navigate("/subscribe-question-2");
  }, [navigate]);

  return (
    <div className={styles.subscribeQuestion1}>
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
      <div className={styles.investorProfileInformationParent}>
        <div className={styles.investorProfile}>
          Investor Profile Information​
        </div>
        <div className={styles.step1}>Step 1</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div className={styles.badActorDisqualificationParent}>
        <div className={styles.badActorDisqualification}>
          “BAD ACTOR” DISQUALIFICATION​
        </div>
        <div className={styles.step8}>Step 8</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div className={styles.capitalCommitmentsParent}>
        <div className={styles.investorProfile}>Capital Commitments ​</div>
        <div className={styles.step1}>Step 2</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div className={styles.accreditedInvestorRepresentaParent}>
        <div className={styles.badActorDisqualification}>
          ACCREDITED INVESTOR REPRESENTATIONS​
        </div>
        <div className={styles.step8}>Step 9</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div className={styles.authorizedSignaturesParent}>
        <div className={styles.investorProfile}>Authorized Signatures</div>
        <div className={styles.step1}>Step 3</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div className={styles.qualifiedPurchaserRepresentaParent}>
        <div className={styles.badActorDisqualification}>
          QUALIFIED PURCHASER REPRESENTATIONS​
        </div>
        <div className={styles.step8}>Step 10</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div className={styles.contactInformationParent}>
        <div className={styles.investorProfile}>Contact Information</div>
        <div className={styles.step1}>Step 4</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
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
      </div>
      <div className={styles.bankInformationParent}>
        <div className={styles.cfiusForeignPersonContainer}>
          Bank Information
        </div>
        <div className={styles.step8}>Step 5</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
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
      </div>
      <div className={styles.identificationOfInvestorStaParent}>
        <div className={styles.badActorDisqualification}>
          IDENTIFICATION OF INVESTOR STATUS​
        </div>
        <div className={styles.step8}>Step 6</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div className={styles.wiringBankStatusParent}>
        <div className={styles.badActorDisqualification}>
          WIRING BANK STATUS​
        </div>
        <div className={styles.step8}>Step 13</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
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
      </div>
      <div className={styles.identificationOfSpecialEntiParent}>
        <div className={styles.badActorDisqualification}>
          IDENTIFICATION OF SPECIAL ENTITIES​
        </div>
        <div className={styles.step8}>Step 14</div>
        <img className={styles.groupChild} alt="" src="/ellipse-71.svg" />
      </div>
      <div className={styles.subscriptionSteps}>Subscription Steps</div>
      <div
        className={styles.loremIpsumDolor}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet odio accumsan arcu posuere venenatis quis nec mauris. Nam consequat ullamcorper nisl, et blandit dolor blandit eget. Pellentesque id dictum erat. Vivamus risus odio, gravida vitae laoreet et, laoreet et arcu. Nullam felis erat, efficitur id gravida porttitor, aliquet non metus. Sed imperdiet id ex ut auctor. Aenean nisi felis, suscipit laoreet cursus eget, auctor ut ipsum. Nullam ipsum magna, elementum a volutpat vitae. `}</div>
      <div className={styles.component2125}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalChild} />
          <div className={styles.submit}>Submit</div>
        </div>
      </div>
      <div className={styles.component2126}>
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
        className={styles.component2092}
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
      <div className={styles.subscribeQuestion1Child} />
      <div className={styles.groupContainer}>
        <div className={styles.buttonNormal}>
          <div className={styles.bg} />
          <img
            className={styles.iconMaterialClose}
            alt=""
            src="/icon-materialclose.svg"
            onClick={onIconMaterialCloseClick}
          />
        </div>
        <div className={styles.whatsTheInvestors}>
          What’s the investor’s full legal name?​
        </div>
        <div className={styles.label1}>
          <div className={styles.firstName}>First Name</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.thomas}>Thomas</div>
        </div>
        <div className={styles.label2}>
          <div className={styles.firstName}>Last Name</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.thomas}>Smith</div>
        </div>
        <b className={styles.logo}>Investor Profile Information​</b>
        <div className={styles.isTheInvestorContainer}>
          <p
            className={styles.isTheInvestor}
          >{`Is the Investor an Individual (including Natural Persons) or an Entity (including Corporations, `}</p>
          <p className={styles.isTheInvestor}>
            Limited Liability Companies, IRAs, Trusts, and other similar
            entities)?​
          </p>
        </div>
        <div className={styles.selectTheApplicable}>
          Select the applicable investor type​
        </div>
        <div className={styles.whatsTheInvestors1}>
          What’s the investor’s principal business address?​
        </div>
        <div className={styles.isTheInvestorContainer1}>
          <p
            className={styles.isTheInvestor}
          >{`Is the Investor a disregarded entity for U.S tax purposes (e.g., a grantor trust or an LLC with a `}</p>
          <p className={styles.isTheInvestor}>{`single owner​). `}</p>
        </div>
        <div className={styles.whatsTheInvestors2}>
          What’s the investor’s principal place (country) of business?​
        </div>
        <div className={styles.whatsTheInvestors3}>
          What’s the investor’s principal place (state) of business?​
        </div>
        <div className={styles.whatsTheInvestors4}>
          What’s the investor’s jurisdiction (country) of organization?​
        </div>
        <div className={styles.whatsTheInvestors5}>
          What’s the investor’s jurisdiction (state) of organization?​
        </div>
        <div className={styles.labelParent}>
          <div className={styles.buttonNormal}>
            <div className={styles.firstName}>Entity Type</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.thomas}>S Corporation</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color1.svg" />
          </div>
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.buttonNormal}>
            <div className={styles.firstName}>Entity Type</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.thomas}>Grantor Trust​</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color1.svg" />
          </div>
        </div>
        <div className={styles.labelContainer}>
          <div className={styles.buttonNormal}>
            <div className={styles.firstName}>Disregarded Entity</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.thomas}>Yes</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color1.svg" />
          </div>
        </div>
        <div className={styles.labelParent1}>
          <div className={styles.buttonNormal}>
            <div className={styles.firstName}>Country</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.thomas}>{`United States `}</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color1.svg" />
          </div>
        </div>
        <div className={styles.labelParent2}>
          <div className={styles.buttonNormal}>
            <div className={styles.firstName}>State</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.thomas}>Pennsylvania</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color1.svg" />
          </div>
        </div>
        <div className={styles.labelParent3}>
          <div className={styles.buttonNormal}>
            <div className={styles.firstName}>Country</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.thomas}>United States</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color1.svg" />
          </div>
        </div>
        <div className={styles.labelParent4}>
          <div className={styles.buttonNormal}>
            <div className={styles.firstName}>State</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.thomas}>Pennsylvania</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color1.svg" />
          </div>
        </div>
        <div className={styles.label10}>
          <div className={styles.firstName}>Address Line 2</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        </div>
        <div className={styles.label11}>
          <div className={styles.firstName}>Address Line 1</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.thomas}>{`1234 First Ave. `}</div>
        </div>
        <div className={styles.label12}>
          <div className={styles.firstName}>{`City `}</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.thomas}>New York</div>
        </div>
        <div className={styles.labelParent5}>
          <div className={styles.buttonNormal}>
            <div className={styles.firstName}>State</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.thomas}>NY</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow7}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color.svg" />
          </div>
        </div>
        <div className={styles.label14}>
          <div className={styles.firstName}>Zip Code</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.thomas}>98765</div>
        </div>
        <div className={styles.logoParent}>
          <b className={styles.logo1}>01/14</b>
          <div className={styles.rectangleWrapper}>
            <div className={styles.rectangleDiv} />
          </div>
        </div>
        <div className={styles.groupParent1} onClick={onGroupContainer35Click}>
          <img
            className={styles.groupChild11}
            alt=""
            src="/group-1754732.svg"
          />
          <div className={styles.next}>Next</div>
        </div>
        <div className={styles.groupParent2}>
          <img
            className={styles.groupChild12}
            alt=""
            src="/group-1754733.svg"
          />
          <div className={styles.previous}>Previous</div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeQuestion1;
