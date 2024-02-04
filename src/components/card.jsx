const Card = ({ title, description, image, link }) => {
  return (
    <a
      href="link"
      className="flex flex-col w-2/5 m-3 no-underline shadow-md hover:shadow-lg hover:shadow-black h-2/5 lg:h-1/2 lg:w-3/4 lg:flex-row shadow-black bg-main rounded-3xl"
    >
      <div className="relative w-full m-0 overflow-hidden max-lg:rounded-b-none lg:rounded-r-none lg:w-1/3 shrink-0 rounded-3xl bg-clip-border">
        <img src={image} alt="img" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-center px-4 text-left">
        <p className="text-[15px] md:text-3xl hover:underline font-serif text-text tracking-[0.1em] font-normal">
          {title}
        </p>
        <p className="text-sm font-light font-description text-text">
          {description}
        </p>
      </div>
    </a>
  );
};

export default Card;
