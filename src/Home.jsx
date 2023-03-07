import React from "react";
import { Card } from "flowbite-react";
const Home = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div>
        <Card
          horizontal={true}
          imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Form Submited Successfully!
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            voluptates consequatur libero deserunt id ipsum vitae nostrum
            officiis quidem qui saepe, sit sunt, cupiditate dolorem dignissimos.
            Maiores vitae a minima?
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
