import React from 'react';
import './App.css';
import { clear, add, del, edit } from './action';
import { connect } from 'react-redux';



function Alert() {
  return (<p style={{ color: "red" }}>Enter name</p>)




}

//dispatch method-------------------------------------------------------
const mapStateToProps = (state) => {
  if (state !== undefined) {
    return {
      arr: state.arr,


    };

  }

};
const mapDispatchToProps = (dispatch) => {
  return {

    clear: () => dispatch(clear()),
    add: (name) => dispatch(add(name)),
    del: (index) => dispatch(del(index)),
    edit: (index, value) => dispatch(edit(index, value))

  };
};



class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      //   element: null,
      //  arr: ['ssss', 'ssss', 'SSSSS', 'AAAAA'], // [{}]

      name: "",
      // id: "edit",
      editindex: -1,
      editedElement: '',
      bol: false

    }

  }
  currenDelete = (index, event) => {
    console.log('hello')
    this.props.del(index)
  }

  /*
    currenDelete = (index, event) => {
      console.log(index, event)
      const array = this.state.arr
      array.splice(index, 1)
      this.setState({ arr: array });
    }
  */
  listItems = () => {

    return this.props.arr?.map((arrelement, index) =>
      <div className="listItems">
        <div className="felx-container">
          <div className="thisTxt">
            {this.state.editindex === index ? <input type="text" value={this.state.editedElement} onChange={this.handleInput} /> : <p>{arrelement}</p>}

          </div>
          <div className="listbuttons">
            <button type="button" onClick={(event) => { this.currenDelete(index, event) }}>Delete</button>
            <button type="button" onClick={(event) => this.toEdit(event, arrelement, index)} id="editbutton">Edit</button>
            <button type="button" onClick={(e) => this.doneEdit(e, index)}>Done</button>
          </div>
        </div>
      </div>
    );
  }

  handleInput = (event) => {
    this.setState({ editedElement: event.target.value });

  }

  toEdit = (event, arrelement, index) => {

    this.setState({ editindex: index })
    this.setState({ editedElement: arrelement })



  }

  doneEdit = (e, index) => {

    console.log(this.state.editedElement)


    if (this.state.editedElement !== undefined) {
      this.props.edit(index, this.state.editedElement)
      this.setState({ editindex: -1 })
    }
    else {
      console.log('undefined')
    }

    this.setState({ bol: false })



  }




  /*doneEdit = (event, index, arrayElement) => {
    //  const edit = document.getElementById(this.state.id + index);
    //  console.log(edit);
    //  edit.contentEditable = false;
    //  edit.style.backgroundColor = "White";

    const editname = this.state.editedElement;
    const newarr = this.state.arr;
    if (editname === "") {
      alert("value should not be empty")
    }
    else {
      newarr[index] = editname
      this.setState({ arr: newarr })
      this.setState({ editedIndex: -1 })
    }



  }
*/
  /*
    toEdit = (event, index, arrayElement) => {
       // const edit = document.getElementById(this.state.id + index);
       // edit.contentEditable = true;
       // edit.style.backgroundColor = "#80b3ff";
       // console.log(this.state.id + index);
       this.setState({ editedElement: arrayElement })
       this.setState({ editedIndex: index })
   
     }
   */


  /*  toAdd = () => {
      if (this.state.name.trim() === "") {
        alert('input should not be empty');
      }
      else {
        let textname = this.state.name;
        this.setState({ arr: [...this.state.arr, textname] })
        console.log(this.state.arr);
        this.setState({ name: '' })
      }
    }
  */
  /* toDelete = () => {
     const array = this.state.arr
     array.splice(0)
     this.setState({ arr: array });
     this.setState({ name: '' })
 
   } */

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }
  addhere = () => {
    if (this.state.name !== "") {
      this.props.add(this.state.name)
      this.setState({ bol: false })
    }
    else {
      this.setState({ bol: true })

    }

    this.listItems()
    this.setState({ name: '' })
  }






  render() {

    const { clear, add, del } = this.props
    return (
      <div className="App">
        <div className="header-name">
          <h1>Todo-list</h1>
        </div>

        <div className="app-new">
          <div className="list">
            <label>
              Name:
          <input type="text" id="text" value={this.state.name} onChange={this.handleNameChange} />
              <button onClick={this.addhere}>Add</button>
              <button onClick={() => { clear(); this.setState({ bol: false }) }}>Clear</button>
              {this.state.bol && <Alert></Alert>}
            </label>
            {this.listItems()}
          </div>
        </div>
      </div>
    )
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(App)
//dispatch method end -------------------------------------------------------------











