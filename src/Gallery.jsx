import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./Context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
  const { search } = useGlobalContext();

  const resp = useQuery({
    queryKey: ["images", search],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${search};
`);
      return result.data;
    },
  });

  if (resp.isLoading) {
    return (
      <section className='image-container'>
        <h5>Loading......</h5>
      </section>
    );
  }
  if (resp.isError) {
    return (
      <section className='image-container'>
        <h5>There is an error</h5>
      </section>
    );
  }

  const results = resp.data.results;
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h5>No result found</h5>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            className='img'
            alt={item.alt_description}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
