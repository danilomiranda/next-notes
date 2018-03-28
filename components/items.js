import Item from './item'

export default ({ items }) => (
  <div>
    <h3>Notas</h3>
    {
      items.map((item, i) => (
        <div key={item._id} className='item'>
          <div className='note'>
            <Item {...item} />
          </div>
        </div>
      ))
    }

    <style jsx>{`
      h3 {
        font-size: 15px;
        color: #A0A4AD;
        font-weight: 500;   
      }
      .item {
        display: flex;
        margin: 20px 0;
        background: #fff;
        padding: 20px 30px 20px 30px;
        border-radius: 25px;
        border-radius: 7px;
      }

      .note {
        flex: 100;
        display: inline-block;
      }
    `}</style>
  </div>
)
