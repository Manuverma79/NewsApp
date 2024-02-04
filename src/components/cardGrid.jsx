import Card from "./card";
// sdf
const CardGrid = ({ newsList }) => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-6 py-10 lg:flex-nowrap lg:flex-col bg-light">
      {newsList.map((data) => (
        <Card
          key={data.title}
          title={data.title}
          description={data.description}
          image={data.image_url}
          linl={data.link}
        ></Card>
      ))}
    </div>
    // ;
  );
};

export default CardGrid;
