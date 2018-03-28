export default ({ _id, title, date }) => {
  return <div>
    <div className="title">
      {title}
    </div>
    <div className="meta">
      {date} 
    </div>
    <style jsx>{`
      .title {
        font-size: 15px;
        margin-bottom: 3px;
        color: #000;
      }

      .title > a {
        color: #000;
        text-decoration: none;
      }

      .title > a:visited {
        color: #828282;
      }

      .meta {
        font-size: 12px;
      }

      .source {
        font-size: 12px;
        display: inline-block;
        margin-left: 5px;
      }

      .source a, .meta a {
        color: #828282;
        text-decoration: none;
      }

      .source a:hover, .meta a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
}
