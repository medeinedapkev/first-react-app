import './ShoppingList.css';
import Container from '../../Components/Container/Container';
import { useState } from 'react';
import ShoppingItem from '../../Components/ShoppingListPage/ShoppingItem/ShoppingItem';

function ShoppingListPage() {
    const shoppingListData = [
        {
            title: 'Dress',
            done: false,
        },
        {
            title: 'Sweater',
            done: false,
        },
        {
            title: 'Pants',
            done: false,
        },
        {
            title: 'Shoes',
            done: false,
        },
        {
            title: 'T-shirts',
            done: false,
        },
    ]
    
    const [ shoppingList, setShoppingList ] = useState(shoppingListData);
    const [ newItem, setNewItem ] = useState('');

    function classNameHandler() {
        setShoppingList(prevState => {
            console.log(prevState)
        })
    }
    
    let shoppingListSection = <h2>Your shopping list is empty</h2>;

    if (shoppingList && shoppingList.length > 0) {
        shoppingListSection = (
        <div>
            <h2>Your shopping list:</h2>
            <ul>
                {shoppingList.map((item, index) => <ShoppingItem onClick={classNameHandler} data={item} key={index} />)}
            </ul> 
        </div>   
        )
    }

    function newItemHandler(event) {
        event.preventDefault();
        setShoppingList(prevState => {
            const newItemObj = 
            {
                title: newItem,
                done: false,
            }
            
            const newState = [newItemObj, ...prevState];
            
            return newState;
        })
        
        setNewItem('');
    }

    const itemInputHandler = (event) => setNewItem(event.target.value)

  return (
    <Container>
        <form onSubmit={newItemHandler}>
           <label htmlFor='shop-item'>New item: </label>
           <input type='text' id='shop-item' name='shop-item' value={newItem} onChange={itemInputHandler} ></input>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
           <input type='Submit'></input>
        </form>

        {shoppingListSection}
    </Container>
  )
}

export default ShoppingListPage;