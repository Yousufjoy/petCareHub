const Carousal = () => {
  return (
    <div class="carousel w-full relative">
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src="https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min.jpg"
          class="w-full h-[500px] object-cover opacity-70"
          alt="Cat"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-white text-4xl font-bold text-center px-4 bg-black bg-opacity-50 py-2 rounded">
            Purr-fect Friends Here
          </h2>
        </div>
        <div class="absolute inset-0 flex items-center justify-between p-4">
          <a
            href="#slide1"
            class="btn btn-circle bg-white text-black hover:bg-gray-200"
          >
            ❮
          </a>
          <a
            href="#slide3"
            class="btn btn-circle bg-white text-black hover:bg-gray-200"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide1" class="carousel-item relative w-full">
        <img
          src="https://media.4-paws.org/3/9/3/1/3931c3a89c44aa0c5a73a7e7fa1c07f1a0bc76a6/VIER%20PFOTEN_2016-09-18_081-2000x666-1920x639.jpg"
          class="w-full h-[500px] object-cover opacity-70"
          alt="Dog"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-white text-4xl font-bold text-center px-4 bg-black bg-opacity-50 py-2 rounded">
            Loyal Companions Await
          </h2>
        </div>
        <div class="absolute inset-0 flex items-center justify-between p-4">
          <a
            href="#slide4"
            class="btn btn-circle bg-white text-black hover:bg-gray-200"
          >
            ❮
          </a>
          <a
            href="#slide2"
            class="btn btn-circle bg-white text-black hover:bg-gray-200"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
