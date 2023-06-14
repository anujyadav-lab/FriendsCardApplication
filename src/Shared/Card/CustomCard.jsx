import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CardHeader, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Component } from "react";
import "./CustomCard.scss";
class CustomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <>
        <Card
          sx={{
            maxWidth: 345,
            width: 300,

            margin: 5,

            boxShadow: "0 0 35px #160eaf",
          }}
        >
          <CardHeader
           
            action={
              <IconButton aria-label="settings" onClick={()=>{this.props.onDelete(this.props.id)} }>
                <DeleteForeverIcon />
              </IconButton>
            }
           
          />

          <CardMedia
            sx={{
              height: 150,
              width: 150,
              padding: "20px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            image={`https://robohash.org/${this.props.id}?10*10`}
            title="friendsCards"
          />
          <CardContent>{this.props.children} </CardContent>

        
          <CardActions>
            <Button
              size="small"
              onClick={() => this.props.onClick(this.props.id, "view")}
            >
              View Details
            </Button>

            <Button
              size="small"
              onClick={() => this.props.onClick(this.props.id, "show")}
            >
              Show Details
            </Button>
          </CardActions>

        </Card>
      </>
    );
  }
}
export default CustomCard;
