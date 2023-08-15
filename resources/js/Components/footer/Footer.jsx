const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <h5 className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <p className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base" dir="ltr">
          ©{1900 + new Date().getYear()} Anophel. All Rights Reserved.
        </p>
      </h5>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="mailto:hello@simmmple.com"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              پشتیبانی
            </a>
          </li>

          <li>
            <a
              target="blank"
              href=""
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              بلاگ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
