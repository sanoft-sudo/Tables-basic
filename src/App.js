import BasicTabel1 from "./components/BasicTable1";
import BasicTabelBordered from "./components/BasicTableBrdered";
import BasicTabelStripped from "./components/BasicTableStripped";
import BasicTabelStrippedHoverable from "./components/BasicTableStrippedHoverable";
import "./styles.css";

export default function App() {
  const data = [
    {
      id: "basic1",
      name: "Sanjar Juraev",
      occupation: "Frontend dev",
      email: "sanjar.juraev0409@gmail.com"
    },
    {
      id: "basic1.1",
      name: "Rasulov Komil",
      occupation: "Backend dev",
      email: "example@gmail.com"
    },
    {
      id: "basic1.2",
      name: "Egamberdiyev Sardor",
      occupation: "Backend dev",
      email: "example@gmail.com"
    },
    {
      id: "basic1.3",
      name: "Tuxtasinov Nurmuhammad",
      occupation: "Backend dev",
      email: "example@gmail.com"
    }
  ];

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <BasicTabel1 data={data} />
        </div>
        <div className="col-md-6 col-sm-12">
          <BasicTabelStripped data={data} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <BasicTabelStrippedHoverable data={data} />
        </div>
        <div className="col-md-6 col-sm-12">
          <BasicTabelBordered data={data} />
        </div>
      </div>
    </div>
  );
}
