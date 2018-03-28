export default ({ _id, title, date }) => {
  return <div>
    <div className="title">
      {title}
    </div>
    <div className="date">
      {date} 
    </div>
    <style jsx>{`
      .title {
        font-size: 15px;
        margin-bottom: 3px;
        color: #000;
      }

      .date {
        font-size: 12px;
        color: #C7C8CA;
      }

    `}</style>
  </div>
}
