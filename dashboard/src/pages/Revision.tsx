import RevisionDetails from "../components/revision/RevisionDetails";
import RevisionsList from "../components/revision/RevisionsList";
import { Chart } from "../data/types";
import { useParams } from "react-router";

const chart: Chart = {
  id: "1",
  name: "1",
  home: "",
  sources: [],
  version: "",
  description: "",
  keywords: [],
  maintainers: [],
  icon: "",
  apiVersion: "",
  appVersion: "",
  annotations: {
    category: "",
    licenses: "",
  },
  dependencies: [],
  urls: [],
  created: "",
  digest: "",
};

function Revision() {
  const params = useParams();
  const { context, namespace } = params;

  console.log(params);

  return (
    <div className="flex">
      <div className="flex flex-col gap-2 w-1/6 h-screen bg-[#E8EDF2]">
        <label className="mt-5 mx-5 text-sm text-[#3D4048] font-semibold">
          Revisions
        </label>
        <RevisionsList />
      </div>

      <div className="w-full h-screen bg-[#F4F7FA]">
        <RevisionDetails chart={chart} />
      </div>
    </div>
  );
}

export default Revision;