export default () => (
  <header className='flex-container'>
    <span className='title'>Notes</span>

    <style jsx>{`
      header {
        background: #000;
        display: flex;
        font-size: 14px;
      }

      .flex-container {
        display: flex;
        justify-content: center;
        padding-bottom: 7px;
      }

      .title {
        font-weight: bold;
        display: inline-block;
        font-size: 14px;
        text-decoration: none;
        padding: 8px 10px 8px 4px;
        color: #fff;
        vertical-align: top;
        text-align: center;
      }

      @media (max-width: 750px) {
        .title {
          font-size: 16px;
          padding-bottom: 0;
        }
      }
    `}</style>
  </header>
)
