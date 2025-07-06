import { useState, useEffect } from "react";

function useExchangeValue(from, to) {

  const [data, setData] = useState({})

  useEffect(() => {
    const apiKey = `25776e950567b4021d2be15f`
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`)
      .then((resp) => (resp.json()))
      .then((resp) => (
        setData(resp)
      ))

  }, [from, to])

  useEffect(() => {
    console.log(data);
  }, [data])

  return data;
}

export default useExchangeValue;
