import React from "react";

// Несмотря на то, что я отметил, что качество кода неважно, прошу далее очищать его от комментов
// и форматировать в едином стиле, чтобы читать код было легче
export default class ItemTodo extends React.Component {
  // COMMENT: Если state не зависит от пропсов, лучше не использовать конструктор
  // BEFORE:
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       list: this.props.list
  //     };
  //   }
  // AFTER:
  state = {
    list: this.props.list
  };

  setItemFinished = id => {
    this.setState(({ list }) =>
      // COMMENT: Крайне нежелательно мутировать значение из стэйта, надо возвращать новое значение
      // BEFORE:
      // {
      //   for (let i = 0; i < list.length; i++) {
      //     if (list[i].id === id) {
      //       list[i].finished = true;
      //       return list;
      //     }
      //   }
      // }
      // AFTER:
      ({
        list: list.map(el => (el.id === id
          ? { ...el, finished: true }
          : el)
        )
      })
    );
  };

  // render - последним методом
  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <li
            key={item.id}
            style={item.finished ? { textDecoration: "line-through" } : {}}
          >
            {item.id} - {item.title}{" "}
            <span
              className="btn-finish"
              onClick={() => {
                this.setItemFinished(item.id);
              }}
            >
              {" "}x{" "}
            </span>
          </li>
        ))}
      </div>
    );
  }
}
