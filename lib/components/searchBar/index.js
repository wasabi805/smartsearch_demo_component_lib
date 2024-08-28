import React from "react";
export function SearchBar(params) {
    console.log("what is params");
    return React.createElement("div", null, params === null || params === void 0 ? void 0 : params.name);
}
