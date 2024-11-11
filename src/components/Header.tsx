import React from 'react';

const Header: React.FC = () => {
  return (
    <section className="bg-white p-8">
      <div className="flex flex-wrap items-center -m-2">
        <div className="w-full md:w-1/2 p-2">
          <ul className="flex flex-wrap items-center gap-x-3 mb-2">
            <li>
              <a className="flex font-medium text-xs text-coolGray-500 hover:text-coolGray-700" href="#">
                <svg
                  className="mr-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3334 5.33334L9.3334 1.82667C8.96671 1.4987 8.49202 1.31738 8.00006 1.31738C7.50811 1.31738 7.03341 1.4987 6.66673 1.82667L2.66673 5.33334C2.45498 5.52272 2.286 5.75504 2.17104 6.01483C2.05609 6.27463 1.9978 6.55592 2.00006 6.84V12.6667C2.00006 13.1971 2.21078 13.7058 2.58585 14.0809C2.96092 14.456 3.46963 14.6667 4.00006 14.6667H12.0001C12.5305 14.6667 13.0392 14.456 13.4143 14.0809C13.7894 13.7058 14.0001 13.1971 14.0001 12.6667V6.83334C14.0014 6.55038 13.9426 6.27036 13.8277 6.01179C13.7128 5.75322 13.5443 5.52197 13.3334 5.33334ZM9.3334 13.3333H6.66673V10C6.66673 9.82319 6.73697 9.65362 6.86199 9.5286C6.98702 9.40357 7.15659 9.33334 7.3334 9.33334H8.66673C8.84354 9.33334 9.01311 9.40357 9.13813 9.5286C9.26316 9.65362 9.3334 9.82319 9.3334 10V13.3333ZM12.6667 12.6667C12.6667 12.8435 12.5965 13.0131 12.4715 13.1381C12.3464 13.2631 12.1769 13.3333 12.0001 13.3333H10.6667V10C10.6667 9.46957 10.456 8.96086 10.0809 8.58579C9.70587 8.21072 9.19716 8 8.66673 8H7.3334C6.80296 8 6.29426 8.21072 5.91918 8.58579C5.54411 8.96086 5.3334 9.46957 5.3334 10V13.3333H4.00006C3.82325 13.3333 3.65368 13.2631 3.52866 13.1381C3.40363 13.0131 3.3334 12.8435 3.3334 12.6667V6.83334C3.33352 6.73868 3.35379 6.64513 3.39287 6.55892C3.43196 6.47271 3.48895 6.39581 3.56006 6.33334L7.56006 2.83334C7.68172 2.72646 7.83812 2.66751 8.00006 2.66751C8.162 2.66751 8.3184 2.72646 8.44006 2.83334L12.4401 6.33334C12.5112 6.39581 12.5682 6.47271 12.6073 6.55892C12.6463 6.64513 12.6666 6.73868 12.6667 6.83334V12.6667Z"
                    fill="#BBC3CF"
                  />
                </svg>
                <p>Home</p>
              </a>
            </li>
            <li>
              <svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.34 0.671999L2.076 14.1H0.732L3.984 0.671999H5.34Z" fill="#BBC3CF" />
              </svg>
            </li>
            <li>
              <a className="flex font-medium text-xs text-coolGray-500 hover:text-coolGray-700" href="#">
                Products
              </a>
            </li>
            <li>
              <svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.34 0.671999L2.076 14.1H0.732L3.984 0.671999H5.34Z" fill="#BBC3CF" />
              </svg>
            </li>
            <li>
              <a className="flex font-medium text-xs text-coolGray-500 hover:text-coolGray-700" href="#">
                Lorem Ipsum
              </a>
            </li>
          </ul>
          <h2 className="font-semibold text-black text-3xl">Page heading name</h2>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="flex flex-wrap justify-end -m-2">
            <div className="w-full md:w-auto p-2">
              <button className="flex flex-wrap items-center justify-center py-3 px-4 w-full text-base text-coolGray-500 font-medium bg-white border border-gray-200 hover:border-gray-300 rounded-md shadow-button">
                <svg
                  className="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18V18Z"
                    fill="#D5DAE1"
                  />
                </svg>
                <span>Button</span>
              </button>
            </div>
            <div className="w-full md:w-auto p-2">
              <button className="flex flex-wrap items-center justify-center py-3 px-4 w-full text-base text-white font-medium bg-green-500 hover:bg-green-600 rounded-md shadow-button">
                <svg
                  className="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18V18Z"
                    fill="#D5DAE1"
                  />
                </svg>
                <span>Button</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
