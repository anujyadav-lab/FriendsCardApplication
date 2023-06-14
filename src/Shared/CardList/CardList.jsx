import { Component } from "react";
import CustomCard from "../Card/CustomCard";
import "./CardList.scss";
import Typography from "@mui/material/Typography";
 
class CardList extends Component {
  constructor(props) {
    super(props);
 
  }
  render() {
    return (
      <div className="cardlistStyle">

       {this.props.friends?.map(({name,email,website,id})=>(
                <CustomCard  onDelete={this.props.onDelete} key={id} onClick={this.props.onCardClick}  id={id}
                >
                <Typography gutterBottom variant="h5" component="div"  color={"orange"}>
{name}
                </Typography>
                <Typography  gutterBottom variant="h6" component="div"  color={"orange"}>
{email}
                </Typography>
                <Typography   variant="body2" color="text.secondary">
                  {website}
                </Typography>
              </CustomCard>
       ))}


      </div>
    );
  }
}
export default CardList;