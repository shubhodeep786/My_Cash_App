import React from "react";

import { Button, Img, Text } from "components";

type ThirdComponentProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ThirdComponent: React.FC<ThirdComponentProps> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_group53.svg')" }}
      >
        <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Img
              className="h-[283px] md:h-auto sm:mt-0 mt-[313px] object-cover"
              src="images/img_investinggraph1.png"
              alt="investinggraphOne"
            />
            <Img
              className="h-[411px] md:h-auto mb-[185px] object-cover"
              src="images/img_investinggraph2.png"
              alt="investinggraphTwo"
            />
          </div>
        </div>
        <div className="absolute flex flex-col md:gap-10 gap-[76px] h-max inset-[0] items-center justify-center m-auto w-[87%]">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
            size="txtAgrandirGrandHeavy40"
          >
            Investing
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-9 pt-[3px]">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtAgrandirGrandHeavy22"
              >
                Stocks
              </Text>
              <Text
                className="leading-[22.00px] text-base text-black-900 tracking-[0.30px] w-full"
                size="txtMulishRegular16"
              >
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </Text>
            </div>
            <Img
              className="md:flex-1 h-[344px] sm:h-auto md:ml-[0] ml-[37px] object-cover w-[14%] md:w-full"
              src="images/img_investingstocks.png"
              alt="investingstocks"
            />
            <Img
              className="md:flex-1 h-[346px] sm:h-auto md:ml-[0] ml-[78px] md:mt-0 mt-0.5 object-cover w-[14%] md:w-full"
              src="images/img_investingbitcoin.png"
              alt="investingbitcoi"
            />
            <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[61px] md:mt-0 mt-9 pt-0.5">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtAgrandirGrandHeavy22"
              >
                Bitcoin
              </Text>
              <Text
                className="leading-[22.00px] text-base text-black-900 tracking-[0.30px] w-full"
                size="txtMulishRegular16"
              >
                Cash App is the fastest way to convert dollars to bitcoin. From
                your home screen, six taps are all it takes to stack sats, buy
                an entire bitcoin, or just see what it’s all about.
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[1%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto w-[91%]">
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-row gap-5 items-center justify-start w-auto">
              <Button className="bg-white-A700 border border-black-900 border-solid cursor-pointer flex items-center justify-center min-w-[170px] px-6 py-[13px] rounded-[7px]">
                <div
                  className="flex items-center space-x-5"
                  style={{ margin: "3px" }}
                >
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.167 4.24004C13.998 3.25378 14.4149 2.18824 14.4149 1.04702V1.04701C14.4149 0.895646 14.4079 0.743074 14.391 0.590515C13.8121 0.620545 13.1965 0.795936 12.5458 1.11308C11.8936 1.43504 11.3559 1.83862 10.933 2.32401C10.0861 3.28266 9.60918 4.45511 9.60918 5.55067C9.60918 5.7021 9.6189 5.84619 9.63566 5.9831C10.951 6.09001 12.1641 5.4125 13.167 4.24004ZM17.5912 20.5792C18.0644 19.9045 18.4729 19.1707 18.818 18.3734C18.9603 18.0354 19.0942 17.6833 19.2208 17.3156C18.6364 17.0705 18.1109 16.7255 17.6405 16.279C16.6024 15.3169 16.0742 14.1053 16.0588 12.6493C16.0419 10.78 16.8911 9.32287 18.6081 8.28253C17.6489 6.91907 16.2066 6.16227 14.2867 6.00733C13.5782 5.94718 12.7134 6.09986 11.6887 6.46862C10.6051 6.86625 9.96595 7.0657 9.77735 7.0657C9.52509 7.0657 8.9497 6.89512 8.05359 6.55876C7.15494 6.22354 6.4318 6.05297 5.88036 6.05297C4.87255 6.06973 3.93672 6.33172 3.07061 6.84583C2.2045 7.35995 1.51249 8.06026 0.992309 8.94806C0.330442 10.0533 0 11.3723 0 12.9016C0 14.2366 0.245085 15.6155 0.733989 17.0396C1.1905 18.358 1.77321 19.5144 2.48198 20.5116C3.14259 21.4455 3.69403 22.1047 4.1349 22.4892C4.82565 23.1315 5.51766 23.4371 6.21193 23.4076C6.66844 23.3921 7.26551 23.2357 8.00669 22.9357C8.74673 22.6371 9.4386 22.4892 10.0837 22.4892C10.6988 22.4892 11.3715 22.6371 12.1035 22.9357C12.8331 23.2357 13.4599 23.3836 13.9797 23.3836C14.7037 23.3667 15.3798 23.0695 16.0108 22.4892C16.4179 22.1356 16.9461 21.499 17.5912 20.5792Z"
                      fill="#00D54B"
                    />
                  </svg>

                  <div className="font-agrandir font-extrabold sm:px-5 text-black-900 text-center text-xs tracking-[0.50px] uppercase">
                    APP STORE
                  </div>
                </div>
              </Button>

              <Button className="bg-white-A700 border border-black-900 border-solid cursor-pointer flex items-center justify-center min-w-[170px] px-[11px] py-3.5 rounded-[7px]">
                <div
                  className="flex items-center space-x-5"
                  style={{ margin: "5px" }}
                >
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.504946 21.3146L9.8176 12.0284L13.1002 15.3012L2.0295 21.4392C1.60857 21.6727 1.09301 21.6692 0.674726 21.4295L0.504946 21.3146ZM8.87849 11.0919L0 19.9448V2.23913L8.87849 11.0919ZM14.4267 7.43357L18.7642 9.83801C19.1904 10.075 19.4548 10.5189 19.4548 11C19.4548 11.481 19.1904 11.9249 18.7642 12.1619L14.3082 14.6318L10.7576 11.0919L14.4267 7.43357ZM0.406786 0.771175C0.486376 0.694239 0.575686 0.627032 0.674726 0.570436C1.09301 0.330788 1.60857 0.32725 2.0295 0.560709L13.2187 6.76415L9.8176 10.1554L0.406786 0.771175Z"
                      fill="#00D54B"
                    />
                  </svg>
                </div>
                <div className="font-agrandir font-extrabold text-black-900 text-center text-xs tracking-[0.50px] uppercase">
                  GOOGLE PLAY
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[358px] w-auto">
            <Text
              className="leading-[13.00px] text-[10px] text-gray-700"
              size="txtMulishBold10Gray700"
            >
              <>
                Brokerage services by Cash App Investing LLC, member FINRA /
                SIPC.
                <br />
                See our BrokerCheck. Investing involves risk; you may lose
                money. Bitcoin trading offered by Cash App. Cash App Investing
                does not trade bitcoin and Cash App is not a member of FINRA or
                SIPC. Cash App facilitates banking services through Sutton Bank
                and Lincoln Savings Bank, Members FDIC.
              </>
            </Text>
          </div>
          <div className="flex gap-[30px] h-6 items-center justify-start md:ml-[0] ml-[35px] w-[126px]">
            <ul>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13_64)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.64899 0L1.03699 4.119V20.955H6.76799V24H9.99199L13.037 20.955H17.694L23.963 14.686V0H2.64899V0ZM21.813 13.612L18.231 17.194H12.5L9.45499 20.239V17.194H4.61899V2.149H21.813V13.612ZM18.231 6.269V12.531H16.082V6.269H18.231ZM12.5 6.269V12.531H10.351V6.269H12.5Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_64">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ul>
            <ul>
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13_66)">
                  <path
                    d="M7.05646 17.4431C14.9241 17.4431 19.2262 10.9252 19.2262 5.27335C19.2262 5.08822 19.2225 4.90392 19.2142 4.72046C20.0493 4.1167 20.7753 3.36326 21.3477 2.50557C20.5814 2.84623 19.7566 3.07556 18.8914 3.17896C19.7746 2.64942 20.4525 1.81175 20.7723 0.813136C19.9459 1.30306 19.0307 1.65915 18.0563 1.85136C17.2757 1.01995 16.1645 0.5 14.9341 0.5C12.572 0.5 10.6565 2.41551 10.6565 4.77675C10.6565 5.1124 10.694 5.43888 10.7674 5.75201C7.21242 5.57314 4.06021 3.87111 1.95081 1.28305C1.58347 1.91516 1.37166 2.64942 1.37166 3.43289C1.37166 4.91685 2.12677 6.22693 3.27507 6.9933C2.57333 6.97162 1.91412 6.77898 1.33788 6.45834C1.33725 6.47629 1.33725 6.49378 1.33725 6.51296C1.33725 8.58442 2.81162 10.314 4.76883 10.7059C4.40941 10.8039 4.03122 10.8564 3.64095 10.8564C3.36576 10.8564 3.09765 10.8293 2.83705 10.7793C3.3816 12.4788 4.96063 13.7155 6.83277 13.7501C5.36883 14.8976 3.52462 15.581 1.5203 15.581C1.17547 15.581 0.834818 15.5614 0.5 15.5218C2.39299 16.7351 4.64082 17.4431 7.05668 17.4431"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_66">
                    <rect
                      width="21"
                      height="17"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ul>

            <ul>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13_68)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.9273 1.06331C7.99265 1.01579 8.33324 1.00391 11.0422 1.00391C13.7511 1.00391 14.0917 1.01579 15.161 1.05935C16.2263 1.10688 16.9511 1.27717 17.5847 1.52272C18.2382 1.78014 18.7966 2.12074 19.3511 2.67519C19.9055 3.22965 20.2501 3.7841 20.5035 4.44153C20.7491 5.07915 20.9194 5.80391 20.9669 6.86529C21.0144 7.93064 21.0263 8.26727 21.0263 10.9801C21.0263 13.693 21.0144 14.0296 20.9669 15.095C20.9194 16.1603 20.7491 16.8851 20.5035 17.5188C20.2461 18.1722 19.9055 18.7306 19.3511 19.2851C18.7966 19.8396 18.2422 20.1841 17.5847 20.4376C16.9471 20.6831 16.2224 20.8534 15.161 20.9009C14.0956 20.9485 13.759 20.9603 11.0461 20.9603C8.33324 20.9603 7.99661 20.9485 6.93126 20.9009C5.86592 20.8534 5.14117 20.6831 4.5075 20.4376C3.85404 20.1801 3.29562 19.8396 2.74117 19.2851C2.18671 18.7306 1.84216 18.1762 1.58869 17.5188C1.34315 16.8811 1.17285 16.1564 1.12532 15.095C1.0778 14.0296 1.06592 13.6891 1.06592 10.9801C1.06592 8.27123 1.0778 7.93064 1.12532 6.86925C1.17285 5.80391 1.34315 5.07915 1.58869 4.44549C1.84612 3.79203 2.18671 3.23361 2.74117 2.67915C3.29562 2.1247 3.85008 1.78014 4.5075 1.52668C5.14117 1.28113 5.86592 1.11084 6.9273 1.06331ZM15.0738 2.86133C14.0204 2.81381 13.7075 2.80193 11.0422 2.80193C8.37681 2.80193 8.06394 2.80985 7.01047 2.86133C6.03621 2.9049 5.50948 3.07123 5.15701 3.20589C4.68968 3.3841 4.35701 3.60193 4.00849 3.95044C3.65998 4.29896 3.44612 4.63163 3.26394 5.09896C3.12532 5.45143 2.96295 5.97816 2.91938 6.95242C2.87186 8.00589 2.85998 8.31876 2.85998 10.9841C2.85998 13.6495 2.87186 13.9623 2.91938 15.0158C2.96295 15.99 3.12928 16.5168 3.26394 16.8693C3.44216 17.3366 3.65998 17.6693 4.00849 18.0178C4.35701 18.3663 4.68968 18.5801 5.15701 18.7623C5.50948 18.9009 6.03621 19.0633 7.01047 19.1069C8.06394 19.1544 8.37681 19.1663 11.0422 19.1663C13.7075 19.1663 14.0204 19.1544 15.0738 19.1069C16.0481 19.0633 16.5748 18.897 16.9273 18.7623C17.3946 18.5841 17.7273 18.3663 18.0758 18.0178C18.4243 17.6693 18.6382 17.3366 18.8204 16.8693C18.959 16.5168 19.1214 15.99 19.1649 15.0158C19.2125 13.9623 19.2243 13.6495 19.2243 10.9841C19.2243 8.31876 19.2125 8.00589 19.1649 6.95242C19.1214 5.97816 18.955 5.45143 18.8204 5.09896C18.6422 4.63163 18.4243 4.29896 18.0758 3.95044C17.7273 3.60193 17.3946 3.38806 16.9273 3.20589C16.5748 3.06727 16.0481 2.9049 15.0738 2.86133Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.91736 10.9802C5.91736 8.14854 8.21439 5.85547 11.0421 5.85547C13.8699 5.85547 16.1669 8.1525 16.1669 10.9802C16.1669 13.8079 13.8699 16.105 11.0421 16.105C8.21439 16.105 5.91736 13.8119 5.91736 10.9802ZM7.71538 10.9802C7.71538 12.8178 9.20449 14.307 11.0421 14.307C12.8798 14.307 14.3689 12.8178 14.3689 10.9802C14.3689 9.1426 12.8798 7.65349 11.0421 7.65349C9.20449 7.65349 7.71538 9.1426 7.71538 10.9802Z"
                    fill="black"
                  />
                  <path
                    d="M16.3689 6.8496C17.0294 6.8496 17.5649 6.31411 17.5649 5.65356C17.5649 4.993 17.0294 4.45752 16.3689 4.45752C15.7083 4.45752 15.1729 4.993 15.1729 5.65356C15.1729 6.31411 15.7083 6.8496 16.3689 6.8496Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_68">
                    <rect
                      width="21"
                      height="21"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

ThirdComponent.defaultProps = {};

export default ThirdComponent;
