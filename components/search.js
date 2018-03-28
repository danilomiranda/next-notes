export default ({ searchQuery, onSearch }) => (
  <div className='search'>
    <input
      type='text'
      placeholder='Pesquise por uma nota'
      value={searchQuery}
      onChange={event => {
        onSearch(event.target.value)
      }}
    />
    <style jsx>{`
      .search {
        display: flex;
        margin: 20px 0;
        background: #fff;
        padding: 20px 30px 20px 30px;
      }

      .search > input {
        flex: 100;
        display: inline-block;
        font-size: 15px;
        color: #C7C8CA;
      }

      .search > input::-webkit-input-placeholder {
        font-size: 15px;
        color: #C7C8CA;
      }
    `}</style>
  </div>
)
