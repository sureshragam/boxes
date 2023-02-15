const Box = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return (
    <div className={className}>
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="card">
      <Box name="small" className="box box1" />
      <Box name="Medium" className="box box2" />
      <Box name="Large" className="box box3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
