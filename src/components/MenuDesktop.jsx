import React from "react";
import "@styles/MenuDesktop.scss";

const MenuDesktop = () =>{
return(
<div className="desktop-menu inactive">
<ul>
<li>
    <a href="/" className="title">My orders</a>
</li>

<li>
    <a href="/">My account</a>
</li>

<li>
    <a href="/">Sign out</a>
</li>
</ul>
</div>
);
}

export default MenuDesktop;