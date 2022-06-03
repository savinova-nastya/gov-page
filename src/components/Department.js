import React from "react";

export default function Department({name, url}) {
    return (
        <li className="departments__item">
            <a href={url}>{name}</a>
        </li>
    );
}