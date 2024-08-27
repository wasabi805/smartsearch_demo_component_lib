import React from "react";

type params = {
  name: string;
};
export function SearchBar(params: params) {
  console.log("what is params");
  return <div>{params?.name}</div>;
}
