// import { Link } from "react-router-dom";

export default function Details(props) {
  const { name, website, email, username } = props.user;

  return (
    <div
      className="Details"
      style={{ padding: "40px", backgroundColor: "#8f00ff" }}
    >
      <h1 style={{ color: "rgb(173 215 230)" }}>Details</h1>
      <h4 style={{ color: "rgb(70 225 80)" }}>Name : {name}</h4>
      <h4 style={{ color: "rgb(70 225 80)" }}>UserName : {username}</h4>
      <h5 style={{ color: "rgb(70 225 80)" }}>Email : {email}</h5>
      <h5 style={{ color: "rgb(70 225 80)" }}>Website : {website}</h5>
      {/* <Link to = "/home">Lint to Home</Link> */}
    </div>
  );
}


