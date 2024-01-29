import React from "react";

export default function Page(props) {
  console.log("props: ", props);
  return <div className="flex">{props.data}</div>;
}

export const getStaticProps = async (context) => {
  const result = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-12-29&sortBy=publishedAt&apiKey=API_KEY/1"
  );
  const data = await result.json();

  return {
    props: { data: data },
  };
};
