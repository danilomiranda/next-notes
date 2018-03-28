import Item from './item'

export default ({ items }) => (
  <div>
    <h3>Notas</h3>
    {
      items.map((item, i) => (
        <div key={item._id} className="item">
          <div className="note">
            <Item {...item} />
          </div>
        </div>
      ))
    }

    <style jsx>{`
      .item {
        display: flex;
        margin: 20px 0;
        background: #fff;
        padding: 20px 30px 20px 30px;
      }

      .note {
        flex: 100;
        display: inline-block;
      }
    `}</style>
  </div>
)
