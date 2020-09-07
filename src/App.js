import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { DragDropContainer } from 'react-drag-drop-container';

class App extends Component {
    render() {
        const context = require.context('./images', true, /.png$/);
        const imagesNameCollection = [];
         context.keys().forEach((key) => {
            imagesNameCollection.push(key.replace("./",""));
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Draggable / Droppable Example</h3>
                    </div>
                    <div className="col-sm-6" style={{backgroundColor : 'lightyellow', minHeight : "500px"}}>
                    </div>
                    <div className="col-sm-6" style={{ backgroundColor: 'lightgray', minHeight: "500px" }}>
                        <div className="row p-2">
                            {imagesNameCollection.map((data, key) => {
                                return <DragDropContainer className="col-sm-2"><img width="78px" src={require("./images/" + data)} /></DragDropContainer>
                            })}
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default App;
