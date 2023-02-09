// Library
import { Fragment, useEffect, useState } from "react";

function Review() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("surveyData") || "[]");
    if (data) {
      setData(data);
    }
  }, []);

  return (
    <Fragment>
      {" "}
      <h1 className="mb-4 font-semibold text-2xl text-center text-purple-700">
        Thanks you for finishing the surveys!
      </h1>
      <p className="text-slate-700 mb-2">Survey Results:</p>
      {data?.length > 0 ? data?.map((item: any) => (
        <div className="mb-3" key={item.id}>
          <p className="font-semibold text-sm text-purple-700 mb-1">{item.question}</p>
          <p className="text-sm text-purple-600">- {item.answer}</p>
        </div>
      )) : (<p className="text-sm text-slate-600">- No Data</p>)}
    </Fragment>
  );
}

export default Review;
