import React from "react";
import Department from "./Department";

export default function DepartmentList({list}) {
    return (
        <div className="departments">
            <p>Непосредственно координирует и контролирует деятельность:</p>
            <ul className="departments__list">
                {list.map((department, i) => (
                    <Department key={i} {...department} />
                ))}
            </ul>
        </div>
    );
}
