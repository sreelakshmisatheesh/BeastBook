import {Component} from 'react';
import Card from '../card/card.component'
import './card-list.styles.css'
class CardList extends Component
{
    render()
    {
        const { monsterZ}  = this.props;
        

        return (
            <div className='card-list'>
                    {/* //const { name , email , id } = monster //destructuring here , later if needed someother component means , you have to set props */}

                {monsterZ.map( (monster) =>
                            {
                                    return(<Card monster = {monster}/>)
                            }) }
                        </div>
                )
    }
}

export default CardList;