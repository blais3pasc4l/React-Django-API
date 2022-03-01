import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listList: [],
       activeItem: {
          id: "",
           name: "",
           direccion: "",
           nit: "",
           tel: "",
       },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/list/")
      .then((res) => this.setState({ listList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  
  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/api/list/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/list/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/list/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { nombre: "", direccion: "", nit: "",  tel: ""};

    this.setState({ activeItem: item, modal: !this.state.modal });
  };


  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
        >
          registered
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.listList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>
          {item.name}
        </span>
        
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">List Enterprise</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
