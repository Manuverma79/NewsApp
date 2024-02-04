const Header = () => {
  return (
    <header className="flex flex-row items-center justify-start w-full bg-main">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pl-[30px]"
      >
        <path
          d="M24.0004 25.309C27.1131 25.309 29.6364 22.7857 29.6364 19.673C29.6364 16.5603 27.1131 14.037 24.0004 14.037C20.8877 14.037 18.3644 16.5603 18.3644 19.673C18.3644 22.7857 20.8877 25.309 24.0004 25.309Z"
          stroke="#FBFADA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.4814 38.172L28.8234 43.5L27.1644 38.172L25.5054 43.5L23.8464 38.172M32.3044 43.05C32.6714 43.359 33.0684 43.5 33.9584 43.5H34.4094C34.5842 43.5 34.7573 43.4655 34.9188 43.3986C35.0803 43.3316 35.227 43.2335 35.3506 43.1097C35.4741 42.986 35.572 42.8392 35.6387 42.6776C35.7055 42.516 35.7397 42.3428 35.7394 42.168C35.7397 41.9932 35.7055 41.82 35.6387 41.6584C35.572 41.4968 35.4741 41.35 35.3506 41.2263C35.227 41.1025 35.0803 41.0044 34.9188 40.9374C34.7573 40.8705 34.5842 40.836 34.4094 40.836H33.5074C33.3326 40.836 33.1595 40.8015 32.998 40.7346C32.8365 40.6676 32.6898 40.5695 32.5662 40.4457C32.4427 40.322 32.3448 40.1752 32.2781 40.0136C32.2113 39.852 32.1771 39.6788 32.1774 39.504C32.1771 39.3292 32.2113 39.156 32.2781 38.9944C32.3448 38.8328 32.4427 38.686 32.5662 38.5623C32.6898 38.4385 32.8365 38.3404 32.998 38.2734C33.1595 38.2065 33.3326 38.172 33.5074 38.172H33.9574C34.8484 38.172 35.2444 38.312 35.6114 38.622M22.0554 42.485C21.8797 42.7933 21.6255 43.0497 21.3187 43.228C21.0118 43.4062 20.6633 43.5001 20.3084 43.5C19.1984 43.5 18.2984 42.6 18.2984 41.49V40.182C18.2984 39.072 19.1984 38.172 20.3084 38.172C21.4184 38.172 22.3194 39.072 22.3194 40.182V40.836H18.2984M16.2834 43.5V40.182C16.2834 39.072 15.3834 38.172 14.2734 38.172C14.0094 38.1719 13.7479 38.2238 13.5039 38.3247C13.2599 38.4257 13.0382 38.5737 12.8515 38.7604C12.6647 38.947 12.5166 39.1686 12.4155 39.4126C12.3144 39.6565 12.2624 39.918 12.2624 40.182M12.2624 43.5V38.172M17.7384 14.82C16.4513 14.82 15.2169 15.3313 14.3068 16.2414C13.3967 17.1515 12.8854 18.3859 12.8854 19.673C12.8854 20.9601 13.3967 22.1945 14.3068 23.1046C15.2169 24.0147 16.4513 24.526 17.7384 24.526V14.82ZM30.2624 24.526C31.5495 24.526 32.7839 24.0147 33.694 23.1046C34.6041 22.1945 35.1154 20.9601 35.1154 19.673C35.1154 18.3859 34.6041 17.1515 33.694 16.2414C32.7839 15.3313 31.5495 14.82 30.2624 14.82V24.526ZM35.1164 13.41C35.1164 12.7726 34.9908 12.1415 34.7469 11.5526C34.5029 10.9637 34.1454 10.4287 33.6946 9.97806C33.2439 9.5274 32.7088 9.16995 32.1199 8.92613C31.531 8.6823 30.8998 8.55687 30.2624 8.557V13.411L35.1164 13.41ZM30.2624 30.789C30.8999 30.7891 31.5311 30.6637 32.1201 30.4198C32.7091 30.1759 33.2442 29.8184 33.695 29.3676C34.1457 28.9168 34.5033 28.3817 34.7472 27.7927C34.9911 27.2037 35.1165 26.5725 35.1164 25.935H30.2624V30.789ZM12.8844 13.41C12.8844 12.7726 13.01 12.1415 13.2539 11.5526C13.4979 10.9637 13.8554 10.4287 14.3062 9.97806C14.7569 9.5274 15.292 9.16995 15.8809 8.92613C16.4698 8.6823 17.101 8.55687 17.7384 8.557V13.411L12.8844 13.41ZM17.7384 30.789C17.1009 30.7891 16.4697 30.6637 15.8807 30.4198C15.2917 30.1759 14.7566 29.8184 14.3058 29.3676C13.855 28.9168 13.4975 28.3817 13.2536 27.7927C13.0097 27.2037 12.8843 26.5725 12.8844 25.935H17.7384V30.789ZM28.8534 13.41C28.8534 12.1229 28.3421 10.8885 27.432 9.97841C26.5219 9.0683 25.2875 8.557 24.0004 8.557C22.7133 8.557 21.4789 9.0683 20.5688 9.97841C19.6587 10.8885 19.1474 12.1229 19.1474 13.41H28.8534ZM19.1474 25.935C19.1474 27.2221 19.6587 28.4565 20.5688 29.3666C21.4789 30.2767 22.7133 30.788 24.0004 30.788C25.2875 30.788 26.5219 30.2767 27.432 29.3666C28.3421 28.4565 28.8534 27.2221 28.8534 25.935H19.1474ZM28.8534 32.041H19.1474C20.1174 33.716 21.9254 34.846 24.0004 34.846C26.0754 34.846 27.8834 33.716 28.8534 32.041ZM19.1474 7.305H28.8534C27.8834 5.63 26.0754 4.5 24.0004 4.5C21.9254 4.5 20.1174 5.63 19.1474 7.305ZM36.3684 14.82V24.526C38.0434 23.556 39.1734 21.748 39.1734 19.673C39.1734 17.598 38.0434 15.79 36.3684 14.82ZM11.6324 24.526V14.82C9.95739 15.79 8.82739 17.598 8.82739 19.673C8.82739 21.748 9.95739 23.556 11.6324 24.526Z"
          stroke="#FBFADA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h1 className="py-0 my-0 uppercase font-heading text-text tracking-[0.14em] text-inherit font-normal">
        news central
      </h1>
    </header>
  );
};

export default Header;