import React from "react"

function Produkter() {
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
  
    return (
          <p>{!data ? "Loading..." : data}</p>
    );
  }

  export default Produkter;