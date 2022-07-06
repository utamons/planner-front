/* planner-front
 * Copyright (C) 2022  Cornknight
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const DragNDrop = (props) => {

    const {id}=props

    function startDrag(ev) {
        ev.dataTransfer.setData("id", id)
        console.log('drag id=', id)
        this.style.opacity = '0.1'
    }

    function dragOver(ev) {

        ev.preventDefault()

    }
    function dragEnter(ev) {

        ev.dataTransfer.dropEffect = props.dropEffect

    }

    function drop(ev) {

        const srcId = ev.dataTransfer.getData("id")

        if (srcId) {

            props.onItemDropped(srcId, id)

        }

    }
    return <div id={id} draggable onDragStart={startDrag} onDragOver={dragOver} onDragEnter={dragEnter} onDrop={drop}>{props.children}</div>
}

export default DragNDrop
