import React from "react";
import DepartmentList from "./DepartmentList";
const defaultPhoto = "/images/photo/default-user.png";

export default function Employee({id, lastname, firstname, patronymic, position, photoUrl, coordinate}) {

    return (
        <div className={"employee row "  + (id === 1 ? 'employee__first' : '')}>
            <div className="col-md-3 employee__photo p-0">
                <img src={(photoUrl.trim() === "") ? defaultPhoto : photoUrl} alt={position}/>
            </div>
            <div className="col-md-9 employee__info">
                <a className="employee__name" href={id}>
                    {lastname} {firstname} {patronymic}
                </a>
                <p className="employee__position">{position}</p>
                {coordinate.length > 0 &&
                    <DepartmentList list={coordinate} />
                }
            </div>
            <div className="col-12 p-0">
             <hr />
            </div>
        </div>
    );
}