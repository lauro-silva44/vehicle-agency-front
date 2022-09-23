import React, { useState, useEffect } from "react";
import axios from "axios";

function PostRequestHooks() {
  const [articleId, setArticleId] = useState(null);

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const article = { title: "diferent article" };
    axios
      .post("https://reqres.in/api/articles", article)
      .then((response) => setArticleId(response.data.title));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return { articleId };
}

export { PostRequestHooks };
