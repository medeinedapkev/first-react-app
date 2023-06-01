import './ShopsWrapper.css';
import ShopItem from "../ShopItem/ShopItem.js";

function ShopsWrapper(props) {
  return (
    <div className='shops-wrapper'>
      <h1 className='shops-section-title'>{props.title}</h1>
      <div className='shops-list'>
      <ShopItem title='Parduotuvė 1' email='info@parduotuve1.lt' phone='+37046543156' address='Vilniaus g. 20, Vilnius' />
      <ShopItem title='Parduotuvė 2' email='info@parduotuve2.lt' phone='+37046543156' address='Vilniaus g. 20, Vilnius' />
      <ShopItem title='Parduotuvė 3' email='info@parduotuve3.lt' phone='+37046543156' address='Vilniaus g. 20, Vilnius' />
      <ShopItem title='Parduotuvė 4' email='info@parduotuve4.lt' phone='+37046543156' address='Vilniaus g. 20, Vilnius' />
      </div>
    </div>
  )
}

export default ShopsWrapper;