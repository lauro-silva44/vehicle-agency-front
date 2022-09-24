import React, { useState, useEffect } from "react";
import axios from "axios";

function PostRequestHooks(id: string) {
  useEffect(() => {
    // POST request using axios inside useEffect React hook

    axios.post("https://locahost:3000/purches", id);
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
}

export { PostRequestHooks };
