import React from 'react';

export default class ItemTodo extends React.Component {
      constructor(props){
          super(props);

          this.state = {
              list :this.props.list
          };
      
      }; //constructor



        render() {
            return (
                <div>
                 {this.state.list.map(item => (
                           <li
                             key={item.id}
                             style={item.finished ? { textDecoration: 'line-through' } : {}}
                           >
                             {item.id} - {item.title} <span className="btn-finish" onClick={() => {this.setItemFinished(item.id)}}> x </span>
                           </li>
                         ))}
                </div>
            );
        }

        setItemFinished = (id)=>  {
            this.setState(({list})=>{
                
//                console.log(list);
                
                
                for (let i=0; i<list.length; i++){
                    if(list[i].id === id){
                        list[i].finished = true;
                        return list[i];
                    }
                }
            })

            //  this.setState(( {list }) => ({
                
            //    list: list.map((item) => {
            //      const newItem = item.id === id
            //        ? Object.assign({}, item, { finished: true })
            //        : item
            //      return newItem
            //    })
            //  }))
          }
          
        
    }
    // class

    // {this.state.list.map(item => (
    //     <li
    //       key={item.id}
    //       style={item.finished ? { textDecoration: 'line-through' } : {}}
    //     >
    //       {item.id} - {item.title} <span className="btn-finish" onClick={() => {this.setItemFinished(item.id)}}> x </span>
    //     </li>
    //   ))}