const Carousal = () => {
  return (
    <div className="carousel w-full relative">
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min.jpg"
          className="w-full h-[500px] object-cover opacity-70"
          alt="Cat"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center px-4 bg-black bg-opacity-50 py-2 rounded">
            Purr-fect Friends Here
          </h2>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <a
            href="#slide1"
            className="btn btn-circle bg-white text-black hover:bg-gray-200"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-white text-black hover:bg-gray-200"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://media.4-paws.org/3/9/3/1/3931c3a89c44aa0c5a73a7e7fa1c07f1a0bc76a6/VIER%20PFOTEN_2016-09-18_081-2000x666-1920x639.jpg"
          className="w-full h-[500px] object-cover opacity-70"
          alt="Dog"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center px-4 bg-black bg-opacity-50 py-2 rounded">
            Loyal Companions Await
          </h2>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <a
            href="#slide4"
            className="btn btn-circle bg-white text-black hover:bg-gray-200"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-white text-black hover:bg-gray-200"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
