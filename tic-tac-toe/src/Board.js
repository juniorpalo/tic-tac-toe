import React, { Component } from 'react'
import './Board.css'
import XPiece from './XPiece'
import OPiece from './OPiece'
import './Board.css'

class Board extends Component {
    render() {
        return (
            <div>
                <table id="board">
                    <tr>
                        <td>
                            < OPiece />
                        </td>
                        <td></td>
                        <td>
                            <XPiece/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <OPiece/>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <XPiece/>
                        </td>
                        <td></td>
                        <td>
                            <XPiece/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Board;