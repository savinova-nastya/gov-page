import React,{useEffect,useState} from "react";
import Employee from "./Employee";

export default function EmployeeList({ url }) {
    const [items, setItems] = useState([]);

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
          }
        )
    }, [])

    return (
        <div className="container">
            {items.map((employee, i) => (
                <Employee key={i} {...employee} />
            ))}
        </div>
    );
}
