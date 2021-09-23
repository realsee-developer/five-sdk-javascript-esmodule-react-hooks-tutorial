import React from "react";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import { useFetchWork } from "./useFetchWork";
import { useWindowDimensions } from "./useWindowDimensions";
import { ModeController } from "./ModeController";
import { TaggingController } from "./TaggingController";

/** work.json 的数据 URL */
const workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/4e18246c206ba031abf00ee5028920e1/work.json";

const FiveProvider = createFiveProvider();
const App = () => {
  const work = useFetchWork(workURL);
  const size = useWindowDimensions();
  return work && <FiveProvider initialWork={work}>
    <FiveCanvas {...size}/>
    <ModeController/>
    <TaggingController/>
  </FiveProvider>;
};

export { App };