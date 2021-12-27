import { useHistory } from "react-router-dom";
const EachItemDetials  = () => {
  const history = useHistory();
  const details = history.location.state.detail;
  const bbb = () => {
    history.push({ pathname: "/dashboard" });
  };
  return (
    <>
      <button onClick={bbb}>Back to Dashboard</button>
      <h1>Each item details</h1>
      <h1>{details.name}</h1>
      <p>price:{details.price}</p>
      <p>ITEM description.........</p>
    </>
  );
};

export default EachItemDetials;
