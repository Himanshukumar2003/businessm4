import { Container } from "@mui/material";
import React from "react";

const CardComponent = () => {
  const data = [
    {
      id: "1",
      heading: "Southern countries",
      text: "Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit.",
    },
    {
      id: "2",
      heading: "Nordic countries",
      text: "Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit.",
    },
    {
      id: "3",
      heading: "African countries",
      text: "Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit.",
    },
  ];

  const travelData = [
    {
      id: 1,
      heading: "Travel by air",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab cupiditate est eveniet.",
      imageUrl:
        "https://mobirise.com/extensions/businessm4/travel-agency/assets/images/ross-parmly-25230-unsplash-1200x797.jpg",
    },
    {
      id: 2,
      heading: "Travel by train",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab cupiditate est eveniet.",
      imageUrl:
        "https://mobirise.com/extensions/businessm4/travel-agency/assets/images/jack-catterall-6268-unsplash-1200x800.jpg",
    },
  ];

  const blogData = [
    {
      id: 1,
      heading: "Mediterranean sea",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab cupiditate est eveniet.",
      imageUrl:
        "https://mobirise.com/extensions/businessm4/travel-agency/assets/images/khatam-tadayon-107740-1200x796.jpg",
    },
    {
      id: 2,
      heading: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab cupiditate est eveniet.",
      imageUrl:
        "https://mobirise.com/extensions/businessm4/travel-agency/assets/images/luca-bravo-121931-unsplash-1200x800.jpg",
    },
    {
      id: 3,
      heading: "African Savannah",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab cupiditate est eveniet.",
      imageUrl:
        "https://mobirise.com/extensions/businessm4/travel-agency/assets/images/sho-hatakeyama-117306-unsplash-1200x800.jpg",
    },
  ];

  const getBackgroundColor = (index) => {
    switch (index) {
      case 0:
        return "#f87171";
      case 1:
        return "#60a5fa";
      case 2:
        return "#34d399";
      default:
        return "#e5e7eb";
    }
  };
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-4 py-10">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="max-w-lg p-10 rounded-lg shadow-md text-white"
            style={{ backgroundColor: getBackgroundColor(index) }}
          >
            <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>
            <p className="text-lg mb-2">{item.text}</p>
            <a href="#" className="  hover:underline mt-2 inline-block">
              Read More →
            </a>
          </div>
        ))}
      </div>
      <div className="py-10">
        <Container maxWidth="lg">
          <div className="p-5 container mx-auto">
            <svg
              x="0px"
              y="0px"
              width="475.082px"
              height="475.081px"
              viewBox="0 0 475.082 475.081"
              xmlSpace="preserve"
              style={{ height: "40px", width: "40px", fill: "#efefef" }}
            >
              <g>
                <g>
                  <path d="M164.45,219.27h-63.954c-7.614,0-14.087-2.664-19.417-7.994c-5.327-5.33-7.994-11.801-7.994-19.417v-9.132 c0-20.177,7.139-37.401,21.416-51.678c14.276-14.272,31.503-21.411,51.678-21.411h18.271c4.948,0,9.229-1.809,12.847-5.424 c3.616-3.617,5.424-7.898,5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85c-3.617-3.612-7.898-5.424-12.847-5.424h-18.271 c-19.797,0-38.684,3.858-56.673,11.563c-17.987,7.71-33.545,18.132-46.68,31.267c-13.134,13.129-23.553,28.688-31.262,46.677 C3.855,144.039,0,162.931,0,182.726v200.991c0,15.235,5.327,28.171,15.986,38.834c10.66,10.657,23.606,15.985,38.832,15.985 h109.639c15.225,0,28.167-5.328,38.828-15.985c10.657-10.663,15.987-23.599,15.987-38.834V274.088 c0-15.232-5.33-28.168-15.994-38.832C192.622,224.6,179.675,219.27,164.45,219.27z"></path>
                  <path d="M459.103,235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61,0-14.089-2.664-19.41-7.994 c-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.409-51.678c14.271-14.272,31.497-21.411,51.682-21.411 h18.267c4.949,0,9.233-1.809,12.848-5.424c3.613-3.617,5.428-7.898,5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85 c-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808,0-38.691,3.858-56.685,11.563c-17.984,7.71-33.537,18.132-46.672,31.267 c-13.135,13.129-23.559,28.688-31.265,46.677c-7.707,17.987-11.567,36.879-11.567,56.674v200.991 c0,15.235,5.332,28.171,15.988,38.834c10.657,10.657,23.6,15.985,38.828,15.985h109.633c15.229,0,28.171-5.328,38.827-15.985 c10.664-10.663,15.985-23.599,15.985-38.834V274.088C475.082,258.855,469.76,245.92,459.103,235.256z"></path>
                </g>
              </g>
            </svg>

            <div className="justify-center items-center flex-wrap gap-4 py-5">
              <div className="">
                <p className="mb-5 text-gray-600 font-[300]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur facilis expedita cum iste voluptate itaque doloribus
                  molestias numquam natus voluptates, molestiae tempora
                  praesentium ratione dicta laudantium, excepturi voluptatibus,
                  assumenda repellendus!
                </p>
                <p className="text-[16] font-[400]">National geographic</p>
              </div>
            </div>
          </div>

          <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.heading}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg text-gray-900 font-semibold mb-2">
                      {item.heading}
                    </h3>
                    <p className="text-gray-900 mb-4">{item.text}</p>
                    <a href="#" className="text-teal-600 hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-10">
            <h2 className="text-2xl font-[400] text-center mb-4">
              Read Our Blog
            </h2>
            <p className="mb-8 text-gray-600 font-[300]  text-cente ">
              Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Officia
              officiis possimus tempore veniam iste hic qui corrupti explicabo
              at error totam.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-[300] mb-4">
                  We offer different ways to travel
                </h2>
                <p className="mb-8">
                  Click any text to edit or style it. Select text to insert a
                  link...
                </p>
              </div>

              {travelData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.heading}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg text-gray-900 font-semibold mb-2">
                      {item.heading}
                    </h3>
                    <p className="text-gray-900 mb-4">{item.text}</p>

                    <a href="#" className="text-teal-600 hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CardComponent;
