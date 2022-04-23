
export default function TextContent({ options, param, name }) {
  
  
  
//  let modelMenuItem = ;
      return(
        <div className="text-content">
          <div className="left-desc">
            {name ? <h3>{name}</h3> : ""}
            <div className="option-list list-item extend">
              <p className="list-head">Options</p>
              {
                options.map((item, i) => {
                 return <p key={i} className="sub-item">{item}</p>
                })
              }
            </div>
          </div>
          <div className="right-desc">
            {param.map((item, i) => {
              return(<div key={i}className="list-item">
                <p className="list-head">{item.item}</p>
                <p className="sub-item">{item.value}</p>
              </div>)
            })}
         
          </div>
          
       </div>

    )
  

}