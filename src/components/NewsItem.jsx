import React from "react";

export default function NewsItem(props) {
  let { title, description,imageUrl,url } = props;

  return (
    <>
      <div>
        <div className="card">
          <img src={imageUrl===null?`src/assets/image_placeholder.jpg`:imageUrl} className="card-img-top overflow-hidden" alt="..." style={{height:"250px",display:"inline-block"}} />
          <div className="card-body">
            <h5 className="card-title overflow-hidden" style={{height:"50px",display:"block"}}>{title===null?"Loading...":title}</h5>
            <p className="card-text overflow-hidden" style={{height:"50px"}}>
              {description===null?"Loading...":description}
            </p>
            <a href={url} target="_blank" className={`btn btn-${props.mode=="dark"?"light":"dark"}`}>
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
