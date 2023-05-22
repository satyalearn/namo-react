// const heading = React.createElement("h1", {}, "this is React webseries");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "first heading"),
    React.createElement("h1", {}, "second heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "first heading"),
    React.createElement("h1", {}, "second heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
