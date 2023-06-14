import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import { Component } from "react";
import CardList from "../../Shared/CardList/CardList";
import Details from "../../Shared/Details/Details";
import Search from "../../Shared/Search/Search";
import "./HomeStyle.scss";
import SimpleDialog from "../../Shared/Dialog/Dialog";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.originalList = [];
    this.state = {
      friends: this.originalList,
      filterType: "name",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users", {})
      .then((response) => {
        // console.log(response);
        if (response?.status === 200) {
          this.originalList = response?.data;
          this.setState({
            friends: response?.data,
            selectedUser: null,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  filterData = (e) => {
    console.log()
    const temp = this.originalList.filter((v) =>
      v[this.state.filterType]?.includes(e.target.value)
    );
    console.log(temp);
    this.setState({
      friends: temp,
    });
  };

  onCardClick = (selectedUserId, type) => {
    // console.log("-->", selectedUserId);
    const selectedUser = this.state.friends.filter(
      (user) => user.id === selectedUserId
    )[0];
    // if (type === "view") {
    //   // console.log(selectedUser);

    //   this.setState({
    //     selectedUser: selectedUser,
    //     showDetails: true,
    //   });
    // }
    // else {
    //   this.setState({
    //     selectedUser: selectedUser,
    //     viewDetails:true,
    //   });
    // }
    
    switch(type){
      case "view":
        this.setState({
              selectedUser: selectedUser,
              showDetails: true,
            });
            break;
            case "show":
              this.setState({
                selectedUser: selectedUser,
                viewDetails: true,
              });
              break;
              default:
                console.log("nothing")
    }
  }


  
  

  onUserDelete = (id) => {
    const temp = this.state.friends.filter((user) => user.id !== id);
    this.setState({
      friends: temp,
    });
  };
  render() {
    return (
      <div className="homeStyle">
        {!this.state.showDetails ? (
          <>
            <Link to="/details">LINK TO DETAILS</Link>
            <h1 className="titleStyle">Home Page</h1>
            <>
              <Search
                className="searchContainer"
                filterDropDown={
                  <>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">
                        Select By
                      </InputLabel>

                      <Select
                        value={this.state.filterType}
                        label="Select By"
                        onChange={(e) => {
                          this.setState({
                            filterType: e.target.value,
                          });
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'name'}>Name</MenuItem>
                        <MenuItem value={'email'}>Email</MenuItem>
                      </Select>
                    </FormControl>
                  </>
                }
                label="search friends.."
                onSearch={this.filterData}
                // onSearch={this.filterData.bind(this)}
              />
            </>
            <CardList
              onCardClick={this.onCardClick}
              friends={this.state.friends}
              onDelete={this.onUserDelete}
            />
          </>
        ) : (
          <Details user={this.state.selectedUser} />
        )}
        <SimpleDialog
          onClose={() => {
            this.setState({
              viewDetails: !this.state.viewDetails,
            });
          }}
          open={this.state.viewDetails}
        >
          <Details user={this.state.selectedUser} />
        </SimpleDialog>
      </div>
    );
  }
}
export default Home;

// past work.
// onInput={(e)=>{
//   console.log("value -->",e.target.value);
//   const temp = this.state.friends.filter(
//     (v) => v.name.includes(e.target.value)
//   );

// <select
// value={this.state.filterType}
// onChange={(e) => {
//   console.log(e.target.value);
//   this.setState({
//     filterType: e.target.value,
//   });
// }}
// >
// <option value="name">Name</option>
// <option value="email">Email</option>
// </select>
