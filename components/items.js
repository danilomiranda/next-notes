import Item from './item'

export default ({ items }) => (
  <div>
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
        margin: 10px 0;
      }

      .note {
        flex: 100;
        display: inline-block;
      }
    `}</style>
  </div>
)
