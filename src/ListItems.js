import React from 'react'
import './ListItems.css'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'

function ListItems(props){

    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className='list' key='item.key'>
                <p>{item.text}</p>
                <span>   
                    <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                    }} icon="trash" />
                </span>
            </div>
        })

    return (
        <div>
                {listItems}
        </div>

    )
}
        
export default ListItems