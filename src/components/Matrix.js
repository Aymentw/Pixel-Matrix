import PixelGrid from "react-pixel-grid";
import React, { Component } from "react";
import "../css/Matrix.css"

class Matrix extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showImage: false,
            nmbre: 0,
            matrix: [],
            result:[],
        };
    }

    handleChange(event) {
        this.setState({
            nmbre: event.target.value,
        });
    }

    generateImage() {
        let myarr = [];
        let createarray1 = function (rowCount, colCount) {
            for (let i = 0; i < rowCount; i++) {
                let row = []
                for (let j = 0; j < colCount; j++) {
                    let col = Math.floor(Math.random() * 2);
                    row.push(col);
                }
                myarr.push(row);
            }
            return myarr;
        }
        createarray1(this.state.nmbre * 2, this.state.nmbre * 2);
        this.setState({
            matrix: myarr,
            showImage: true,
        },()=>{

            this.setState({
                result:this.state.matrix,
            });
        });
    }

    reverseImage() {
        this.setState({
            matrix: this.state.matrix.reverse(),
        });
    }

    flipImage() {
        this.setState({
            matrix: this.state.matrix.map(row => row.reverse()),
        });
    }

    render() {

        return (
            <>
                <div className="container-image">
                    {this.state.showImage
                        ? <PixelGrid
                            data={this.state.matrix}
                            options={{
                                size: 30,
                                padding: 2,
                                background: [0, 0, 0],
                            }}
                        />
                        : null
                    }
                </div>
                <div className="container-buttons">
                    <input type="number" name="nmbre" value={this.state.nmbre}
                        onChange={this.handleChange.bind(this)} />
                    <button onClick={() => this.generateImage()}>
                        Generate
                </button>
                    <button onClick={() => this.flipImage()}>
                        Flip(Horizontal)
                </button>
                    <button onClick={() => this.reverseImage()}>
                        Invert
                </button>
                </div>
            </>
        )
    }
}

export default Matrix;

